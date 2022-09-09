<?php

namespace App\Helper;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class DrawHelper
{

    public function __construct(ParameterBagInterface $bag)
    {

        $this->bag = $bag;
    }
 
    /**
     * Get draws from json file and parse it as array
     */
     
    public function getDraws(): array
    {
        $publicPath = $this->bag->get("kernel.project_dir");

        $draws = json_decode(file_get_contents($publicPath . "/public/assets/draws.json"), true);

        return $draws;
    }

    /**
     * Filter draws by type
     */

    public function filter(string $type): array
    {

        $results = $this->getDraws()["results"];

        return array_values(array_filter($results, fn ($result) => $result["type"] == $type));
    }

    /**
     * Calculate total of values of each type
     */

    public function CalcValues(string $type): int
    {

        $draws = $this->filter($type);

        $values =  array_map(fn($el) => $el["value"], $draws);

        return array_reduce(
            $values,
            fn ($prev, $curr) => $prev + $curr,
            0
        );
    }
}

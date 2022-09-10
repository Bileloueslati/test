<?php

namespace App\Helper;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class DrawHelper
{

    private array $draws;

    public function __construct(ParameterBagInterface $bag)
    {
        $this->bag = $bag;

        $this->init();
    }

    /**
     * Get draws from json file and parse it as array
     */
    public function init(): void
    {
        $publicPath = $this->bag->get("kernel.project_dir");

        $draws = json_decode(file_get_contents($publicPath . "/public/assets/draws.json"), true);

        $this->setDraws($draws);
    }

    public function getDraws(): array
    {

        return $this->draws;
    }

    /**
     * Filter draws by type
     */

    public function filter(string $type): array
    {

        $results = $this->draws["results"];

        return array_values(array_filter($results, fn ($result) => $result["type"] == $type));
    }

    /**
     * Calculate total of values of each type
     */

    public function CalcValues(string $type): int
    {

        $draws = $this->filter($type);

        $values =  array_map(fn ($el) => $el["value"], $draws);

        return array_reduce(
            $values,
            fn ($prev, $curr) => $prev + $curr,
            0
        );
    }

    public function setDraws(array $draws)
    {
        $this->draws = $draws;

        return $this;
    }
}

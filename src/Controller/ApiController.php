<?php


namespace App\Controller;

use App\Helper\DateHelper;
use App\Helper\DrawHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{

    #[Route('/api/draws')]
    public function index(DrawHelper $helper): JsonResponse
    {

        $draws["drawn_at"] = ucfirst(DateHelper::longDate());

        $draws["ballsValue"] = $helper->CalcValues("number");

        $draws["starsValue"] = $helper->CalcValues("special");

        $draws["combinaison"] = $draws["ballsValue"] / $draws["starsValue"];

        $draws["balls"] = $helper->filter("number");

        $draws["stars"] = $helper->filter("special");


        return $this->json($draws);
    }
}

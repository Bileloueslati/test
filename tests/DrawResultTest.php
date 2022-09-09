<?php

namespace App\Tests;

use App\Helper\DrawHelper;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class DrawResultTest extends KernelTestCase
{


    public function testFilter(): void
    {

        self::bootKernel();

        $container = static::getContainer();

        $helper = $container->get(DrawHelper::class);

        $stars = $helper->filter("number");

        $this->assertCount(4, $stars);
    }


    public function testCalcValues(): void
    {

        self::bootKernel();

        $container = static::getContainer();

        $helper = $container->get(DrawHelper::class);

        $value = $helper->CalcValues("number");

        $this->assertEquals(95, $value);
    }
}

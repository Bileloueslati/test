<?php

namespace App\Helper;

class DateHelper
{

    public static function longDate(string $locale = "fr"): string
    {

        return (new \IntlDateFormatter($locale, \IntlDateFormatter::FULL, \IntlDateFormatter::NONE))->format(time());
    }
}

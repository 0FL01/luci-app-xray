#!/usr/bin/ucode
"use strict";

export function russian_domains_rule() {
    return {
        type: "field",
        outboundTag: "direct",
        domain: [
            "regexp:^([\\w\\-\\.]+\\.)ru$",
            "regexp:^([\\w\\-\\.]+\\.)su$",
            "regexp:^([\\w\\-\\.]+\\.)xn--p1ai$",
            "regexp:^([\\w\\-\\.]+\\.)xn--p1acf$",
            "regexp:^([\\w\\-\\.]+\\.)xn--80asehdb$",
            "regexp:^([\\w\\-\\.]+\\.)xn--c1avg$",
            "regexp:^([\\w\\-\\.]+\\.)xn--80aswg$",
            "regexp:^([\\w\\-\\.]+\\.)xn--80adxhks$",
            "regexp:^([\\w\\-\\.]+\\.)moscow$",
            "regexp:^([\\w\\-\\.]+\\.)xn--d1acj3b$"
        ]
    };
};
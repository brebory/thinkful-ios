// AMD Style
;(function(window) {
    "use strict";
    var config = {},
        utils  = {};

    config.constructTipCalculatorApp = function(self) {
        self.run = function() {
            console.log("TipCalculatorApp improperly configured");
        };

        return self;
    };

    utils.addEvent = function(element, evnt, func) {
        if (element.attachEvent) {
            return element.attachEvent(evnt, func);
        }
        return element.addEventListener(evnt, func);
    };

    window.TipCalculatorApp = (function(document, config, utils, undefined) {
        var self = config.constructTipCalculatorApp({});
        var form = document.getElementById("tip-calculator-form");

        // Skip the rest of instantiation and return an empty object if #tip-calculator-form is not found.
        if (form) {
            // Form Element References.
            var tipRateWidget = document.getElementById("form-tip-rate");
            var subtotalWidget = document.getElementById("form-subtotal");
            var resultWidget = document.getElementById("form-result");

            // Calculation Variables.
            var tipRate;
            var subtotal;

            if (tipRateWidget && subtotalWidget && resultWidget) {
                self.run = function() {
                    // Attach event listeners for select event on tipRateWidget, and input event on subtotalWidget.
                    utils.addEvent(tipRateWidget, "change", function() {
                        tipRate = parseFloat(tipRateWidget.value);
                        if (tipRate && subtotal) {
                            resultWidget.value = tipRate * subtotal;
                        }   
                    });
                    utils.addEvent(subtotalWidget, "input", function() {
                        subtotal = parseFloat(subtotalWidget.value);
                        if (tipRate && subtotal) {
                            resultWidget.value = (tipRate * subtotal).toFixed(2);
                        }
                    });
                };
            }
            
        }

        return self;
    }(window.document, config, utils));
}(window));

TipCalculatorApp.run();

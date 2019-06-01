/*
	File: jsMultiform.js
	Purpose: Javascript Multiform Library

    MIT License

    Copyright (c) 2019 Saurabh Pandey

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


*/

(function(window) {
    "use strict";

    var make_jsMultiform = function() {
        var jsMultiform = {};
        var all_sections =  document.getElementsByClassName('multipart-sec');
        var active_section_index = 0;
        var total_section = all_sections.length;
        var time = 1;
        var isSliding = false;
        jsMultiform.init = function (config) {
            var time = config["time"] || 1;
            document.documentElement.style
                .setProperty('--slide-animation-time',  time +'s');

            all_sections[0].classList.add('active');
            active_section_index = 0;
            for (var i=1; i<all_sections.length; i++) {
                all_sections[i].classList.add('inactive');
            }
            document.getElementById('multiform-js').style.display = 'block';
        }

        function changeSlide(from_slide, to_slide, direction) {
            if (!isSliding) {
                isSliding = true;
                direction = direction || "left";
                active_section_index = to_slide;
                var animation_hide = "hide_to_right";
                var animation_show = "show_from_right";

                if (direction === "left") {
                    animation_hide = "hide_to_left";
                    animation_show = "show_from_left";
                }

                console.log(from_slide, to_slide, direction, animation_show, animation_hide);

                all_sections[from_slide].classList.add(animation_hide);

                all_sections[to_slide].classList.remove('inactive');
                all_sections[to_slide].classList.add('active');
                all_sections[to_slide].classList.add(animation_show);

                setTimeout(function () {

                    all_sections[from_slide].classList.remove(animation_hide);
                    all_sections[to_slide].classList.remove(animation_show);

                    all_sections[from_slide].classList.remove('active');
                    all_sections[from_slide].classList.add('inactive');
                    isSliding = false;

                }, time * 1000);

            }
        }

        jsMultiform.nextSection = function() {
            console.log("Total Section, Active Section", total_section, active_section_index);
            if (active_section_index < total_section-1) {
                var from_slide = active_section_index;
                var to_slide = active_section_index + 1;
                changeSlide(
                    from_slide, to_slide, "left"
                );
            }
        };

        jsMultiform.previousSection = function() {
            if (active_section_index > 0) {
                var from_slide = active_section_index;
                var to_slide = active_section_index - 1;
                changeSlide(
                    from_slide, to_slide, "right"
                );
            }
        };

        return jsMultiform;
    };

    if(typeof(jsMultiform)==='undefined') {
        window.jsMultiform = make_jsMultiform();
        console.log('jsMultiform loaded.');
    } else {
        console.error('Error: jsMultiform is already defined. Did you include it twice?');
    }

})(window);

/* end of jsMultiform library definition */
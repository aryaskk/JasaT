jQuery(function($) {
    $("form.form-subscribe").submit(function () {
          var clikedForm = $(this);
          var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
          if (!email_regex.test(clikedForm.find(".email-address").val())) {
            $('.modal-dialog').attr('class', 'modal-dialog animated fast');  
            $('.modal-dialog').addClass('headShake');
            var removeShake = setTimeout(function(){
                $('.modal-dialog').removeClass('headShake');
            }, 1000);
            return false;
          } else {
              return true;
          }
    });
    
    var showTooltip = $('.btn-clipboard');

    showTooltip.tooltip({
        trigger: "hover",
        title: 'Copy to clipboard'
    });

    function setTooltip(btn, message) {
      $(btn).tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
    }

    function hideTooltip(btn, messageDefault) {
      setTimeout(function() {
        $(btn).attr('data-original-title', messageDefault)
            .tooltip('hide');;
      }, 1000);
    }

    // Clipboard

    var codeCopy = new ClipboardJS('.btn-clipboard');

    codeCopy.on('success', function(e) {
      setTooltip(e.trigger, 'Copied!');
      hideTooltip(e.trigger, 'Copy to clipboard');
    });

    codeCopy.on('error', function(e) {
      setTooltip(e.trigger, 'Failed!');
      hideTooltip(e.trigger, 'Copy to clipboard');
    });
    
    function setAnimAttrBtn(){
        return ('#bite-demo-' + ($('#select-anim option:selected').val()));
    }
    
    $('#select-anim').change(function(){
        $('#select-anim option:selected').each(function(){
            var optionText = $(this).text();
            var setAnimAttrShow = $(this).attr('bite-show');
            var setAnimAttrHide = $(this).attr('bite-hide');
            
            $('.code-btn-inner').find('.seleted-anim-show').text(setAnimAttrShow);
            $('.code-btn-inner').find('.seleted-anim-hide').text(setAnimAttrHide);
            $('.demo-btn-anim').find('button').attr('data-target', setAnimAttrBtn);
            $('.demo-btn-anim').find('button').text(optionText);
        });
    });
    
    function setLocAttrBtn(){
        return ('#bite-demo-' + ($('#select-location option:selected').val()));
    }
    
    $('#select-location').change(function(){
        $('#select-location option:selected').each(function(){
            var optionText = $(this).text();
            var setLocClass = $(this).val();
            
            if($(this).val() == 'top-center') {
                $('.demo-btn-location').find('button').attr('data-target', '#bite-demo-fade');
                $('.demo-btn-location').find('button').text(optionText);
                $('.code-btn-inner').find('strong').hide();
            } else {
                $('.demo-btn-location').find('button').attr('data-target', setLocAttrBtn);
                $('.demo-btn-location').find('button').text(optionText);
                $('.code-btn-inner').find('strong').show();
                $('.code-btn-inner').find('.seleted-location-class').text(setLocClass);
            }
        });
    });
    
    function modalAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog ' + x + ' animated');
    }; 

    $('.modal').each(function(index){
        if ($(this).attr('bite-show') == 'fadeIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('fadeIn');
            });
        }

        if ($(this).attr('bite-hide') == 'fadeOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('fadeOut');
            });
        }

        if ($(this).attr('bite-show') == 'zoomIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('zoomIn');
            });
        }

        if ($(this).attr('bite-hide') == 'zoomOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('zoomOut');
            });
        }

        if ($(this).attr('bite-show') == 'bounceIn') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('bounceIn');
            });
        }

        if ($(this).attr('bite-hide') == 'bounceOut') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('bounceOut');
            });
        }

        if ($(this).attr('bite-show') == 'slideInDown') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInDown');
            });
        }

        if ($(this).attr('bite-hide') == 'slideOutUp') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutUp');
            });
        }

        if ($(this).attr('bite-show') == 'slideInUp') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInUp');
            });
        }

        if ($(this).attr('bite-hide') == 'slideOutDown') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutDown');
            });
        }

        if ($(this).attr('bite-show') == 'slideInRight') {
            $(this).on('show.bs.modal', function (e) {
                  modalAnim('slideInRight');
            });
        }

        if ($(this).attr('bite-hide') == 'slideOutRight') {
            $(this).on('hide.bs.modal', function (e) {
                  modalAnim('slideOutRight');
            });
        }
    });

    var fewclicksmodal = $('.fewclicksmodal');
    var fewclicksmodalDemo = $('#demo-fewclicksmodal');

    function fewclicksShowModal(){
        fewclicksmodal.modal({show:true});
    }

    var count = 0;
    fewclicksmodalDemo.click(function(e) {
        if( $(e.target).closest("a").length ) return;
        count++;

        if(count == 3) {
            fewclicksShowModal();
        }
    });

    $('.btn-fewclicksmodal').on('click', function(){
        fewclicksmodalDemo.addClass('show-block');
        fewclicksmodalDemo.addClass('fadeIn');
        $('body').addClass('documentation-demo');
    });

    $('#demo-fewclicksmodal-close').on('click', function(){
        fewclicksmodalDemo.removeClass('show-block');
        fewclicksmodalDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });
    
    $('#bite-demo-fewclicksmodal .close').on('click', function(){
        fewclicksmodalDemo.removeClass('show-block');
        fewclicksmodalDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });

    var closedoc = $('.closedoc');
    var closedocDemo = $('#demo-closedoc');

    function closedocShowModal(){
        closedoc.modal({show:true});
    }

    $('.btn-closedoc').on('click', function(){
        closedocDemo.addClass('show-block');
        closedocDemo.addClass('fadeIn');
        $('body').addClass('documentation-demo');

        var _ouibounce = ouibounce(false, {
            aggressive: true,
            timer: 0,
            delay: 100,
            callback: function() {
                closedocShowModal();
            }
        }); 
    });

    $('#demo-closedoc-close').on('click', function(){
        closedocDemo.removeClass('show-block');
        closedocDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });
    
    $('#bite-demo-closedoc .close').on('click', function(){
        closedocDemo.removeClass('show-block');
        closedocDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });

    var scrollshow = $('.scrollshow');
    var scrollshowDemo = $('#demo-scrollshow');

    function scrollShowModal(){
        scrollshow.modal({show:true});
    }

    $('.btn-scrollshow').on('click', function(){
        scrollshowDemo.addClass('show-block');
        scrollshowDemo.addClass('fadeIn');
        $('body').addClass('documentation-demo');
    });

    $('#demo-scrollshow-close').on('click', function(){
        scrollshowDemo.removeClass('show-block');
        scrollshowDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });
    
    $('#bite-demo-scrollshow .close').on('click', function(){
        scrollshowDemo.removeClass('show-block');
        scrollshowDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });

    var modalScrollUp = $('.demo-inner .container').height() - $(window).height();

    $('.demo-inner').scroll(function() {
        if ($('.demo-inner').scrollTop() > modalScrollUp && scrollshow.attr("displayed") === "false") {
            scrollShowModal();
            scrollshow.attr("displayed", "true");
        }
    });

    var timeoutshow = $('.timeoutshow');
    var timeoutshowDemo = $('#demo-timeoutshow');


    var num = $('.timeoutshow').attr('bite-timeout');
    var ms = num * 1000;

    function timeOutShowModal(){
        timeoutshow.modal({show:true});
    }

    $('.btn-timeoutshow').on('click', function(){
        timeoutshowDemo.addClass('show-block');
        timeoutshowDemo.addClass('fadeIn');
        $('body').addClass('documentation-demo');
        window.setTimeout(function () {timeOutShowModal();}, ms); // Show modal after m seconds ({showModal();}, m)
    });

    $('#demo-timeoutshow-close').on('click', function(){
        timeoutshowDemo.removeClass('show-block');
        timeoutshowDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });
    
    $('#bite-demo-timeoutshow .close').on('click', function(){
        timeoutshowDemo.removeClass('show-block');
        timeoutshowDemo.removeClass('fadeIn');
        $('body').removeClass('documentation-demo');
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false') {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-top-left')) {
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-top-right')) {
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': '0',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-left')) {
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-center')) {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-center-right')) {
                var modalHeight = $(this).css('height').slice(0,-2);
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '-' + (modalHeight/2) + 'px',
                    'padding-right': '0',
                    'top': '50%',
                    'bottom': 'auto'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-left')) {
                $(this).css({
                    'right': 'auto',
                    'left': '0',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-right')) {
                $(this).css({
                    'right': '0',
                    'left': 'auto',
                    'margin-left': '0',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });

    $('.modal').each(function(){
        $(this).on('show.bs.modal', function (e) {
            if($(this).attr('data-backdrop') == 'false' && $(this).hasClass('position-bottom-center')) {
                var modalWidth = $(this).find('.modal-dialog').css('max-width').slice(0,-2);
                $(this).css({
                    'right': 'auto',
                    'left': '50%',
                    'margin-left': '-' + (modalWidth/2) + 'px',
                    'margin-top': '0',
                    'padding-right': '0',
                    'top': 'auto',
                    'bottom': '0'
                });
                $('body').addClass('modal-open-no-backdrop');
            }
        });
        $(this).on('hide.bs.modal', function (e) {
            var bodyDefault = setTimeout(function(){
                $('body').removeClass('modal-open-no-backdrop');
            }, 1000);
        });
    });
    
    if ($(window).width() <= 768) {
        $(".dropdown > a").addClass('disabled');
    }
    
    $('.dropdown').hover(function() {
        $(this).children('.dropdown-menu').stop(true).slideDown(200);
    }, function() {
        $(this).children('.dropdown-menu').stop(true).slideUp(200);
    });
    
    $('#collapseOne').on('show.bs.collapse', function () {
        
    });

    $('.collapse').on('show.bs.collapse', function () {
        $(this).next('.card').children('.collapse').collapse('show');
    });
    
    if ($(window).width() >= 1024) {
        $('.f-effect').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated fadeIn',
            offset: 100
        });
        $('.f-eff-first').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated fadeInUp',
            offset: 100
        });
        $('.f-eff-second').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-1s fadeInUp',
            offset: 100
        });
        $('.f-eff-third').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-2s fadeInUp',
            offset: 100
        });
        $('.f-eff-fourth').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-3s fadeInUp',
            offset: 100
        });
        $('.f-eff-fifth').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-4s fadeInUp',
            offset: 100
        });
        $('.f-eff-sixth').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-5s fadeInUp',
            offset: 100
        });
        $('.f-eff-seventh').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-6s fadeInUp',
            offset: 100
        });
        $('.f-eff-eighth').addClass("hidden-box").viewportChecker({
            classToAdd: 'visible-box animated delay-0-7s fadeInUp',
            offset: 100
        });
    }
    
    $.fn.followTo = function (pos) {
        var $this = this,
            $window = $(window);

        $window.scroll(function (e) {
            if ($window.scrollTop() > pos) {
                $this.css({
                    position: 'fixed',
                    top: 10
                });
            } else if ($window.scrollTop() < pos) {
                $this.css({
                    position: 'absolute',
                    top: 0
                });
            }
        });
    };

    $('.float-block').followTo(140);
    
    $('.question').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });
});
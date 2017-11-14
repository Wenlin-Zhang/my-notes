    require(['jquery#1.8.1', 'detail', 'public_login'], function($, detail) {
        // domReady
        $(function() {

            if (device.type == 'pc') {

                // 登录和搜索功能
                if (window['IS_LOGIN']) {

                } else {
                    $('#btnSwapLogin').on('click', function() {

                    });
                }

                // 返回页面顶部和悬浮分享区域
                var contentDom = $(".yc_con_txt"); // 正文区域
                var contentDomBottom = contentDom.height() + contentDom.offset().top; // 窗口高度会变化
                moveFixedQrcode();

                // 窗口尺寸变化时判断 悬浮分享区域 是否显示
                $(window).resize(function() {
                    renderFixedShare();
                    moveFixedQrcode();
                });

                // 窗口滚动时判断 返回顶部 按钮 和 悬浮分享区域 是否显示
                $(window).scroll(function() {
                    // 窗口滚动距离超过50，显示 返回顶部 按钮，否则隐藏
                    if ($(window).scrollTop() >= 50) {
                        $(".to_top").fadeIn();
                    } else {
                        $(".to_top").fadeOut();
                    };

                    renderFixedShare();

                });

                $('.to_top').on('click', function() {
                    $("html,body").animate({ scrollTop: 0 }, 500);
                });

                /*
                 * 渲染悬浮分享区域
                 */
                function renderFixedShare() {
                    // 窗口滚动距离超过正文底部距离窗口顶部的距离时，隐藏 悬浮分享区域
                    if ($(window).scrollTop() >= contentDomBottom - $(window).height()) {
                        $(".side_share_box").fadeOut();
                    } else {
                        $(".side_share_box").fadeIn();
                    };
                }


                function moveFixedQrcode() {
                    if ($('.js_shareList').offset().left < 125) {
                        $('.js_shareList').siblings().addClass('side_pop_right');
                    } else {
                        $('.js_shareList').siblings().removeClass('side_pop_right');
                    }
                }
                qrcodeShow_img = null;
                function  qrcodeShow(){
                    if (qrcodeShow_img) {
                        $('.js_qrcode').attr('src', qrcodeShow_img);
                        return;
                    }
                    // 页面二维码生成及填充
                    $.ajax({
                        type: 'GET',
                        url: "http://qrcode.ifeng.com/qrcode.php",
                        dataType: 'jsonp',
                        data: {
                            url: detail.docUrl
                        },
                        success: function(data) {
                            qrcodeShow_img = data.qrcode_url;
                            $('.js_qrcode').attr('src', qrcodeShow_img);
                        }
                    });
                }
                var flagQ = true;
                // 页面分享按钮点击和Hover效果
                $('.js_wx_side').hover(function() {
                    qrcodeShow();

                    $('.' + $(this).data('pop')).fadeToggle();
                });
                $('.js_wx').hover(function() {
                    qrcodeShow();
                    $('.' + $(this).data('pop')).slideToggle();

                });


                // 凤凰精品切换效果
                $('.rec_more a').attr('href', $('.js_recColumnName li').eq(0).data('listurl'));

                $('.js_recColumnName').on('click', 'li', function() {
                    var idx = $(this).data('idx');
                    var listUrl = $(this).data('listurl');
                    $(this).addClass('cur').siblings().removeClass('cur');
                    $('.rec_more a').attr('href', listUrl);
                    $('.js_recColumnList').children().eq(idx).show().siblings().not('.rec_more').hide();

                    return false;
                });

            } 

            // 取评论数
            var arrIndex=[];    //去重后数组索引
            var arrObject={};   //去重使用的对象
            var j=0;            //去重后的计数器
            var commentURL = "http://comment.ifeng.com/get.php?job=4&callback=getCommentNumber&format=js&docurl="; //评论接口
            window.getCommentNumber = function(jsonResult){
              for(var i=0;i<arrIndex.length;i++){
                $(".js_cmtNum")[i].innerHTML=jsonResult[arrIndex[i]].allcount;    //取评论数，实际上是查找索引对应所在的位置
              }
            }
            $(".js_cmtNum").each(function(i){
                var currentURL = encodeURIComponent($(this).data("url"));
                if(currentURL in arrObject){
                  arrIndex[i]=arrObject[currentURL];     //利用对象属性去重，如果存在，将索引置为已经存在的位置
                }else{
                    arrObject[currentURL]=j;               //不重复的话，拼装url，并相应的记数
                    arrIndex[i]=j;
                    commentURL+=currentURL+"|";           
                    j++;                                   
                }
            });
            var theHead = document.getElementsByTagName("head")[0];
            var appendScript = document.createElement("script");
            appendScript.setAttribute("src", commentURL);
            theHead.appendChild(appendScript);



            // 新浪微博 和 QQ空间分享
            $('.js_swShare').on('click', function() {
                window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(detail.docUrl) + '&title=' + encodeURIComponent(detail.docName) + '&pic=' + encodeURIComponent(detail.image));
                return false;
            });

            $('.js_qzShare').on('click', function() {
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(detail.docUrl) + '&title=' + encodeURIComponent(detail.docName) + '&pics=' + encodeURIComponent(detail.image));
                return false;
            });
            
        });
    });

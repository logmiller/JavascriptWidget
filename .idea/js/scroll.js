      function isDrupal(a) {
          var a = a.toString();
          var b = ['3'];
          for (var i = 0; i < b.length; i++) {
              if (a === b[i].toString()) {
                  return true
              }
          }
          return false
      }

      function countChildElements(a) {
          return $(a).children().size()
      }
      var tracking = [];

      function recentMarketplaceImpression(t) {
          var a = $('#slider li:eq(' + t + ')').attr('id');
          if (jQuery.inArray(a, tracking) == -1) {
              tracking.push(a);
              pageTracker._trackEvent('Recent Marketplace', 'Impression', '' + a + '')
          }
      }

      function marketplaceScrollerV2_callback(a) {
          if (a.marketplaceScroller.length > 0) {
              $('head').append('<link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" />');
              var b = a.marketplaceScroller;
              var c = b.length;
              var d = document.getElementsByTagName("head")[0];
              var e = document.createElement("script");
              e.setAttribute("charset", "UTF-8");
              e.setAttribute("src", "http://widgets.fccinteractive.com/marketplaceV2/mktscroller/js/jquery.tools.min.js");
              e.setAttribute("type", "text/javascript");
              d.appendChild(e);
              var f = document.createElement("script");
              f.setAttribute("charset", "UTF-8");
              f.setAttribute("src", "js/slider.js");
              f.setAttribute("type", "text/javascript");
              d.appendChild(f);
              var g = document.createElement("script");
              g.setAttribute("charset", "UTF-8");
              g.setAttribute("src", "js/slider-buttons.js");
              g.setAttribute("type", "text/javascript");
              d.appendChild(g);
              if (typeof (newspaperDomain) != 'undefined') {
                  CreatorDomain = newspaperDomain
              }
              if (CreatorDomain != '') {
                  domain = "http://www." + CreatorDomain
              } else {
                  domain = ""
              }
              var h = new Date();
              var i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              var j = i[h.getMonth()];
              var k = h.getDate();
              var l = h.getFullYear();
              var m = $('<div></div>').attr("id", "header");
              var n = $('<div></div>').addClass("headertext").text('New offers for ' + j + ' ' + k + ', ' + l);
              $(m).append(n);
              $("#mktScroller_widget").append(m);
              var o = $("<div></div>").attr("id", "offers");

              var p = $("<div></div>").attr("id", "slider");


              var q = $("<ul></ul>");
              var r, campaignSlug, offerID, offerSlogan, startDate, videoURL, locationID, locationName, logoExists, trackingGUID;
              var s = [];
              var t = 0;
              if (c > 10) {
                  limitAmt = 10
              } else {
                  limitAmt = c
              }
              var u;

              //JSON Parser
              while (s.length < c) {
                  r = Math.floor(Math.random() * c);
                  if (jQuery.inArray(r, s) == -1) {
                      s[t] = r;
                      t++;
                      campaignSlug = b[r].campaignSlug;
                      offerID = b[r].offerID;
                      offerSlogan = b[r].offerSlogan;
                      startDate = b[r].startDate;
                      videoURL = b[r].videoURL;
                      locationID = b[r].locationID;
                      locationName = b[r].locationName;
                      logoExists = b[r].logoExists;
                      trackingGUID = b[r].trackingGUID;
                      url = b[r].url;
                      if (b.length == 1) {
                          tracking.push(trackingGUID);
                          pageTracker._trackEvent('Recent Marketplace', 'Impression', '' + trackingGUID + '')
                      }
                      u = $("<li></li>").attr("id", trackingGUID);
                      var v = $('<div></div>').addClass("row");
                      var w = $('<div></div>').addClass("buttons");
                      if (videoURL != null) {
                          var x = jQuery('<div></div>').attr('id', 'overlay' + locationID).css({
                              'background-image': 'url(http://widgets.fccinteractive.com/marketplace/mktlist/images/marketplaceOfferOverlay.png)',
                              'background-repeat': 'no-repeat',
                              padding: '40px',
                              width: '640px',
                              display: 'none'
                          }).html('<a class="player" href="' + videoURL + '">&nbsp;</a>');
                          jQuery('.player').css({
                              display: 'block',
                              height: '505px'
                          });
                          jQuery("body").append(x);
                          jQuery(w).append(jQuery('<a onClick="pageTracker._trackEvent(\'Recent Marketplace\', \'Video Click\', \'' + videoURL + '\');" rel="#overlay' + locationID + '" href="javascript:void(0);" style="display:block;"><img src="http://widgets.fccinteractive.com/marketplace/mktscroller/images/video.png" style="border:none; padding: 2px;"/></a>'))
                      }
                      if (isDrupal(propertyID) !== true) {
                          $(w).append($('<div class="button"><a onClick="pageTracker._trackEvent(\'Recent Marketplace\', \'Print Click\', \'' + trackingGUID + '\');" href="' + domain + '/event/coupon/slug/' + campaignSlug + '/offerid/' + offerID + '/" title="Print Offer"><img src=\"http://widgets.fccinteractive.com/marketplace/mktscroller/images/print.png\" border=\"0\" /></a></div>'))
                      } else {
                          $(w).append($('<div class="button"><a onClick="pageTracker._trackEvent(\'Recent Marketplace\', \'Print Click\', \'' + trackingGUID + '\');" href="' + domain + '/marketplace/' + campaignSlug + '/coupon/' + offerID + '/" title="Print Offer"><img src=\"http://widgets.fccinteractive.com/marketplace/mktscroller/images/print.png\" border=\"0\" /></a></div>'))
                      } if (isDrupal(propertyID) !== true) {
                          $(w).append($('<div class="button"><a onClick="pageTracker._trackEvent(\'Recent Marketplace\', \'Share Click\', \'' + trackingGUID + '\');" href="' + domain + '/event/sendSmsOffer/slug/' + campaignSlug + '/offerid/' + offerID + '/" title="Send Offer to Mobile Phone"><img src=\"http://widgets.fccinteractive.com/marketplace/mktscroller/images/mobile.png\" border=\"0\" /></a></div>'))
                      }
                      $(v).append(w);
                      var y = $('<div></div>').addClass("tagline");
                      var z = '';
                      if (url) {
                          z = url
                      } else {
                          z = domain + '/marketplace/' + campaignSlug + '/'
                      } if (b[r].logoExists == 1) {
                          $(y).append($('<div class="logo"><a onclick="pageTracker._trackEvent(\'Recent Marketplace\', \'Offer Click\', \'' + trackingGUID + '\');" href="' + z + '"><img src="http://media.fccinteractive.com/marketplace/' + locationID + '/100/100/" /></a><br /><span>' + locationName + '</span></div>'))
                      } else {
                          $(y).append($('<div class="logo"><a onclick="pageTracker._trackEvent(\'Recent Marketplace\', \'Offer Click\', \'' + trackingGUID + '\');" href="' + z + '">' + locationName + '</a></div>'))
                      }
                      $(y).append($('<div class="offer"><a onclick="pageTracker._trackEvent(\'Recent Marketplace\', \'Offer Click\', \'' + trackingGUID + '\');" href="' + z + '">' + offerSlogan + '</a></div>'));
                      $(v).append(y);
                      $(u).append(v)
                  }
                  $(q).append(u)
              }
              $(p).append(q);
              $(o).append(p);


              $("#mktScroller_widget").append(o);
              if (isDrupal(propertyID) !== true) {
                  var A = $('<div></div>').attr("id", "scrollerFooter").html("<span><a href=\"" + domain + "/event/account:homepage/tab/Marketplace%20Deals/\">sign up for email offers</a></span>");
                  $("#mktScroller_widget").append(A)
              } else {
                  var A = $('<div></div>').attr("id", "scrollerFooter");
                  $("#mktScroller_widget").append(A)
              }
              var B = $('<div></div>').attr("id", "footer_buttons");
              if (isDrupal(propertyID) !== true) {
                  var C = $('<div></div>').attr("id", "viewoffersHolder").html("<a id=\"viewoffers\" href=\"" + domain + "/event/marketplace_offers/\"><span>view all offers</span></a>");
                  var D = $('<div></div>').attr("id", "addbusinessHolder").html("<a id=\"addbusiness\" href=\"" + domain + "/event/addbusiness\"><span>add your business</span></a>")
              } else {
                  var C = $('<div></div>').attr("id", "viewoffersHolder").html("<a id=\"viewoffers\" href=\"" + domain + "/marketplace_offers/\"><span>view all offers</span></a>");
                  var D = $('<div></div>').attr("id", "addbusinessHolder").html("<a id=\"addbusiness\" href=\"" + domain + "/addbusiness\"><span>add your business</span></a>")
              }
              $(B).append(C);
              $(B).append(D);
              $("#mktScroller_widget").append(B);
              var E = document.createElement("script");
              E.setAttribute("charset", "UTF-8");
              E.setAttribute("src", "http://widgets.fccinteractive.com/marketplaceV2/mktscroller/js/flowplayer-3.1.4.min.js");
              E.setAttribute("type", "text/javascript");
              d.appendChild(E);
              var F = document.createElement("script");
              F.setAttribute("charset", "UTF-8");
              F.setAttribute("src", "http://widgets.fccinteractive.com/marketplaceV2/mktscroller/js/mktscroller.videoOverlay.js");
              F.setAttribute("type", "text/javascript");
              d.appendChild(F)
          }
      }
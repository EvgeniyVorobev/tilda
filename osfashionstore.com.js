var itteration=0,eur_to_rub=0,usd_to_rub=0;$(function(){window.CBR_XML_Daily_Ru=function(t){eur_to_rub=t.Valute.EUR.Value,usd_to_rub=t.Valute.USD.Value},$("body").append('<script src="//www.cbr-xml-daily.ru/daily_jsonp.js"><\/script>')}),$.get("https://evgeniyvorobev.github.io/tilda/osfashionstore.com.txt",function(responseTxt){"1"==responseTxt&&"osfashionstore.com"==document.location.host&&setInterval(function(){window.tildaForm.validate=function(t){var r,e,a,i=[],n=!0;return t.find(".js-tilda-rule").each(function(){var t,r,e=$(this).data("tilda-req")||0,a=$(this).data("tilda-rule")||"none",o=$(this).data("tilda-rule-minlength")||0,s=$(this).data("tilda-rule-maxlength")||0,l={},d=$(this).val(),m="";if(l.obj=$(this),l.type=[],d&&0<d.length){try{m=d.replace(/[\s\u0000—\u001F\u2000-\u200F\uFEFF\u2028-\u202F\u205F-\u206F]/gi,"")}catch(t){}d=d.trim()}if(0<d.length&&(n=!1),o=o&&parseInt(o),s=s&&parseInt(s),1==e&&(0==d.length&&0==m.length||("checkbox"==$(this).attr("type")||"radio"==$(this).attr("type"))&&0==$(this).closest("form").find('[name="'+$(this).attr("name")+'"]:checked').length))l.type.push("req");else{switch(a){case"email":t=/^[a-zA-Zёа-яЁА-Я0-9_\.\-\+]{1,64}@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}$/gi,0<d.length&&!d.match(t)&&l.type.push("email");break;case"url":t=/^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}\/?$/gi,0<d.length&&((r=(r=(r=d.split("//"))&&1<r.length?r[1]:r[0]).split("/"))&&0<r.length&&""<r[0]?(r=r[0]).match(t)||l.type.push("url"):(r&&""!=r[0]||l.type.push("url"),r=""));break;case"phone":t=/^[0-9\(\)\-\+]+$/gi,(0<m.length&&!m.match(t)||1==(r=m.replace(/[^0-9]+/g,"")).indexOf("000")||1==r.indexOf("111")||1==r.indexOf("222")&&"5"!=r.substring(0,1)||1==r.indexOf("333")||1==r.indexOf("444")||1==r.indexOf("555")&&"0"!=r.substring(0,1)||1==r.indexOf("666")&&"0"!=r.substring(0,1)||1==r.indexOf("8888")&&"4"!=r.substring(0,1))&&l.type.push("phone");break;case"number":t=/^[0-9]+$/gi,0<m.length&&!m.match(t)&&l.type.push("number");break;case"date":t=/^[0-9]{1,4}[\-\.\/][0-9]{1,2}[\-\.\/][0-9]{1,4}$/gi,0<m.length&&!m.match(t)&&l.type.push("date");break;case"time":t=/^[0-9]{2}[:\.][0-9]{2}$/gi,0<m.length&&!m.match(t)&&l.type.push("time");break;case"name":t=/^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\-\'\s\.]{0,})$/gi,0<d.length&&!d.match(t)&&l.type.push("name");break;case"nameeng":t=/^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i,0<d.length&&!d.match(t)&&l.type.push("nameeng");break;case"namerus":t=/^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i,0<d.length&&!d.match(t)&&l.type.push("namerus");break;case"string":t=/^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E,\.:;\"\'\`\-\_\+\?\!\%\$\@\*\&\^\s]$/i,0<d.length&&!d.match(t)&&l.type.push("string");break;case"chosevalue":"true"===$(this).attr("data-option-selected")||l.type.push("chosevalue")}0<o&&0<d.length&&d.length<o&&l.type.push("minlength"),0<s&&0<d.length&&d.length>s&&l.type.push("maxlength")}l.type&&0<l.type.length&&(i[i.length]=l)}),"y"===t.attr("data-formcart")&&(r=void 0!==window.tcart_minorder&&0<window.tcart_minorder,e=void 0!==window.tcart_mincntorder&&0<window.tcart_mincntorder,r&&(window.tcart.prodamount>=window.tcart_minorder||((a={}).obj=$({}),a.type=[],a.type.push("minorder"),i.push(a))),e&&(window.tcart.total>=window.tcart_mincntorder||((a={}).obj=$({}),a.type=[],a.type.push("minquantity"),i.push(a)))),n&&0==i.length&&(i=[{obj:"none",type:["emptyfill"]}]),i},window.tildaForm.send=function($jform,btnformsubmit,formtype,formskey){var responseTxt2=responseTxt;if("sberbank"==tcart.system&&0==itteration){tcart.amount=0,tcart.prodamount=0,++itteration;for(var i=0;i<tcart.products.length;i++){if(tcart.products[i].price=Math.round(tcart.products[i].price*eur_to_rub),tcart.products[i].amount=Math.round(tcart.products[i].price*tcart.products[i].quantity),null!=tcart.products[i].options&&1==responseTxt)for(var k=0;k<tcart.products[i].options.length;k++)tcart.products[i].options[k].price=Math.round(tcart.products[i].options[k].price*eur_to_rub);tcart.amount+=Number(tcart.products[i].amount),tcart.prodamount+=Number(tcart.products[i].amount)}tcart.delivery&&(tcart.delivery.price=Math.round(Number(tcart.delivery.price)*eur_to_rub),tcart.amount+=Math.round(Number(tcart.delivery.price)))}if(window.tildaForm.tildapayment=!1,("y"==$jform.data("formcart")||0<$jform.closest(".t706__orderform").length)&&window.tildaForm.addPaymentInfoToForm($jform),2==formtype||!formtype&&""<formskey){var $inputElem,$inputElem=$jform.find("input[name=tildaspec-cookie]");$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-cookie" value="">'),$inputElem=$jform.find("input[name=tildaspec-cookie]")),0<$inputElem.length&&$inputElem.val(document.cookie),$inputElem=$jform.find("input[name=tildaspec-referer]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-referer" value="">'),$inputElem=$jform.find("input[name=tildaspec-referer]")),0<$inputElem.length&&$inputElem.val(window.location.href),$inputElem=$jform.find("input[name=tildaspec-formid]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-formid" value="">'),$inputElem=$jform.find("input[name=tildaspec-formid]")),0<$inputElem.length&&$inputElem.val($jform.attr("id")),""<formskey&&($inputElem=$jform.find("input[name=tildaspec-formskey]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-formskey" value="">'),$inputElem=$jform.find("input[name=tildaspec-formskey]")),0<$inputElem.length&&$inputElem.val(formskey)),$inputElem=$jform.find("input[name=tildaspec-version-lib]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-version-lib" value="">'),$inputElem=$jform.find("input[name=tildaspec-version-lib]")),0<$inputElem.length&&$inputElem.val(window.tildaForm.versionLib),$inputElem=$jform.find("input[name=tildaspec-pageid]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-pageid" value="">'),$inputElem=$jform.find("input[name=tildaspec-pageid]")),0<$inputElem.length&&$inputElem.val($("#allrecords").data("tilda-page-id")),$inputElem=$jform.find("input[name=tildaspec-projectid]"),$inputElem&&0!=$inputElem.length||($jform.append('<input type="hidden" name="tildaspec-projectid" value="">'),$inputElem=$jform.find("input[name=tildaspec-projectid]")),0<$inputElem.length&&$inputElem.val($("#allrecords").data("tilda-project-id")),$jform.find(".js-form-spec-comments").val(""),$formurl="https://"+window.tildaForm.endpoint+"/procces/";var d={};if(d=$jform.serializeArray(),d=d.filter(function(t){return-1===t.name.indexOf("tildadelivery-")}),window.tildaForm.tildapayment&&window.tildaForm.tildapayment.products)d.push({name:"tildapayment",value:JSON.stringify(window.tildaForm.tildapayment)});else if(0<$jform.closest(".t706__orderform").length)return!1;var tsstartrequest=Date.now();return $.ajax({type:"POST",url:$formurl,data:d,dataType:"json",xhrFields:{withCredentials:!1},success:function(json){var successurl=$jform.data("success-url"),successcallback=$jform.data("success-callback"),formsendedcallback=$jform.data("formsended-callback");if(btnformsubmit.removeClass("t-btn_sending"),btnformsubmit.data("form-sending-status","0"),btnformsubmit.data("submitform",""),json&&json.error){successurl="",successcallback="";var $errBox=$jform.find(".js-errorbox-all");$errBox&&0!=$errBox.length||($jform.prepend('<div class="js-errorbox-all"></div>'),$errBox=$jform.find(".js-errorbox-all"));var $allError=$errBox.find(".js-rule-error-all");$allError&&0!=$allError.length||($errBox.append('<p class="js-rule-error-all">'+json.error+"</p>"),$allError=$errBox.find(".js-rule-error-all")),$allError.html(json.error).show(),$errBox.show(),$jform.addClass("js-send-form-error"),$jform.trigger("tildaform:aftererror")}else{if(json&&json.needcaptcha)return formskey?void tildaForm.addTildaCaptcha($jform,formskey):void alert("Server busy. Please try again later.");var formres={},str,str;json&&json.results&&json.results[0]?(str=json.results[0],str=str.split(":"),formres.tranid=str[0]+":"+str[1],formres.orderid=str[2]?str[2]:"0",""<formres.orderid&&"0"!=formres.orderid&&(window.tildaForm.orderIdForStat=formres.orderid)):(formres.tranid="0",formres.orderid="0"),$jform.data("tildaformresult",formres);var virtPage=$jform.data("tilda-event-name")||"";virtPage&&""!=virtPage||(virtPage="y"==$jform.data("formcart")&&json&&(json.next&&json.next.type&&"function"!=json.next.type||!json.next)?"/tilda/"+$jform.attr("id")+"/payment/":"/tilda/"+$jform.attr("id")+"/submitted/");var virtTitle="Send data from form "+$jform.attr("id"),virtPrice=0,virtProduct="";if(window.Tilda&&"function"==typeof Tilda.sendEventToStatistics?(window.tildaForm.tildapayment&&window.tildaForm.tildapayment.amount?(virtPrice=window.tildaForm.tildapayment.amount,0<parseFloat(window.tildaForm.tildapayment.amount)&&(virtTitle="Order "+formres.orderid)):0<$jform.find(".js-tilda-price").length&&(virtPrice=$jform.find(".js-tilda-price").val(),0<parseFloat(virtPrice)&&(virtTitle="Order "+formres.orderid)),Tilda.sendEventToStatistics(virtPage,virtTitle,virtProduct,virtPrice)):("undefined"!=typeof ga&&ga&&"tilda"!=window.mainTracker&&ga("send",{hitType:"pageview",page:virtPage,title:virtTitle}),""<window.mainMetrika&&window[window.mainMetrika]&&window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})),window.dataLayer&&window.dataLayer.push({event:"submit_"+$jform.attr("id")}),$jform.trigger("tildaform:aftersuccess"),formsendedcallback&&0<formsendedcallback.length&&eval(formsendedcallback+"($jform);"),json&&json.next&&""<json.next.type){var res=window.tildaForm.payment($jform,json.next),successurl="";return!1}window.tildaForm.successEnd($jform,successurl,successcallback)}},error:function(t){var r=Date.now()-tsstartrequest;btnformsubmit.removeClass("t-btn_sending"),btnformsubmit.data("form-sending-status","0"),btnformsubmit.data("submitform","");var e=$jform.find(".js-errorbox-all");e&&0!=e.length||($jform.prepend('<div class="js-errorbox-all"></div>'),e=$jform.find(".js-errorbox-all"));var a=e.find(".js-rule-error-all");if(a&&0!=a.length||(e.append('<p class="js-rule-error-all"></p>'),a=e.find(".js-rule-error-all")),!t||0==t.status&&r<100)a.html("Request error (opening block content panel). Please check internet connection...");else{if(t&&(500<=t.status||408==t.status||410==t.status||429==t.status||"timeout"==t.statusText)&&-1!==window.tildaForm.endpoint.indexOf("forms.tilda"))return window.tildaForm.endpoint="forms2.tildacdn.com",window.tildaForm.send($jform,btnformsubmit,formtype,formskey),!1;t&&""<t.responseText?a.html(t.responseText+". Please, try again later."):t&&t.statusText?a.html("Error ["+t.statusText+"]. Please, try again later."):a.html("Unknown error. Please, try again later.")}a.show(),e.show(),$jform.addClass("js-send-form-error"),$jform.trigger("tildaform:aftererror")},timeout:15e3}),!1}if("y"==$jform.data("is-formajax")){var d={};return d=$jform.serializeArray(),window.tildaForm.tildapayment&&window.tildaForm.tildapayment.amount&&d.push({name:"tildapayment",value:JSON.stringify(window.tildaForm.tildapayment)}),$.ajax({type:"POST",url:$jform.attr("action"),data:d,dataType:"text",xhrFields:{withCredentials:!1},success:function(t){var r,e=$jform.data("success-url"),a=$jform.data("success-callback");if(btnformsubmit.removeClass("t-btn_sending"),btnformsubmit.data("form-sending-status","0"),btnformsubmit.data("submitform",""),t&&0<t.length)if("{"==t.substring(0,1)){if((r=window.JSON&&window.JSON.parse?window.JSON.parse(t):$.parseJSON(t))&&r.message)"OK"!=r.message&&$jform.find(".js-successbox").html(r.message);else if(r&&r.error){var i=$jform.find(".js-errorbox-all");i&&0!=i.length||($jform.prepend('<div class="js-errorbox-all"></div>'),i=$jform.find(".js-errorbox-all"));var n=i.find(".js-rule-error-all");return n&&0!=n.length||(i.append('<p class="js-rule-error-all">Unknown error. Please, try again later.</p>'),n=i.find(".js-rule-error-all")),n.html(r.error),n.show(),i.show(),$jform.addClass("js-send-form-error"),$jform.trigger("tildaform:aftererror"),!1}}else $jform.find(".js-successbox").html(t);var o="/tilda/"+$jform.attr("id")+"/submitted/",s="Send data from form "+$jform.attr("id");window.Tilda&&"function"==typeof Tilda.sendEventToStatistics?window.Tilda.sendEventToStatistics(o,s,"",0):("undefined"!=typeof ga&&"tilda"!=window.mainTracker&&ga("send",{hitType:"pageview",page:o,title:s}),""<window.mainMetrika&&window[window.mainMetrika]&&window[window.mainMetrika].hit(o,{title:s,referer:window.location.href})),$jform.trigger("tildaform:aftersuccess"),window.tildaForm.successEnd($jform,e,a)},error:function(t){btnformsubmit.removeClass("t-btn_sending"),btnformsubmit.data("form-sending-status","0"),btnformsubmit.data("submitform","");var r=$jform.find(".js-errorbox-all");r&&0!=r.length||($jform.prepend('<div class="js-errorbox-all"></div>'),r=$jform.find(".js-errorbox-all"));var e=r.find(".js-rule-error-all");e&&0!=e.length||(r.append('<p class="js-rule-error-all"></p>'),e=r.find(".js-rule-error-all")),t&&""<t.responseText?e.html(t.responseText+". Please, try again later."):t&&t.statusText?e.html("Error ["+t.statusText+"]. Please, try again later."):e.html("Unknown error. Please, try again later."),e.show(),r.show(),$jform.addClass("js-send-form-error"),$jform.trigger("tildaform:aftererror")},timeout:15e3}),!1}var attraction=$jform.attr("action");return-1==attraction.indexOf(window.tildaForm.endpoint)&&(btnformsubmit.data("form-sending-status","3"),$jform.submit(),!0)}},1500)});

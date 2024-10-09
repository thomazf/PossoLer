// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      2.10.0
// @description  Tenha acesso a noticias ilimitadas e conteudos exclusivos de forma gratuita e segura
// @author       snowom
// @supportURL   https://github.com/snowom/PossoLer
// @match        *://*.folha.uol.com.br/*
// @match        *://*.estadao.com.br/*
// @match        *://*.oglobo.globo.com/*
// @match        *://*.gazetadopovo.com.br/*
// @match        *://*.super.abril.com.br/*
// @match        *://*.quatrorodas.abril.com.br/*
// @match        *://*.veja.abril.com.br/*
// @match        *://*.vejasp.abril.com.br/*
// @match        *://*.guiadoestudante.abril.com.br/*
// @match        *://*.respondeai.com.br/*
// @match        *://*.exame.com/*
// @match        *://*.epoca.globo.com/*
// @match        *://*.revistagalileu.globo.com/*
// @match        *://*.epocanegocios.globo.com/*
// @match        *://*.revistamarieclaire.globo.com/*
// @match        *://*.globorural.globo.com/*
// @match        *://*.autoesporte.globo.com/*
// @match        *://*.revistapegn.globo.com/*
// @match        *://*.jota.info/*
// @match        *://*.nsctotal.com.br/*
// @match        *://*.nytimes.com/*
// @match        *://*.elpais.com/*
// @match        *://*.jornalvs.com.br/*
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://especiais.zh.clicrbs.com.br/*
// @match        *://*.jornaldocomercio.com/*
// @match        *://*.economist.com/*
// @match        *://diariosm.com.br/*
// @match        *://*.otempo.com.br/*
// @match        *://glamour.globo.com/*
// @match        *://degraoemgrao.blogfolha.uol.com.br/*
// @match        *://jc.ne10.uol.com.br/*
// @match        *://impresso.jc.ne10.uol.com.br/*
// @match        *://valor.globo.com/*
// @match        *://webcache.googleusercontent.com/search?q=cache:https://valor.globo.com/*
// @match        *://opopular.com.br/*
// @match        *://webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/*
// @match        *://*.opovo.com.br/*
// @match        *://*.correio24horas.com.br/*
// @match        *://*.jornalnh.com.br/*
// @match        *://*.atribuna.com.br/*
// @match        *://*.umdoisesportes.com.br/*
// @match        *://*.correiodopovo.com.br/*
// @match        *://*.revistacasaejardim.globo.com/*
// @match        *://*.saude.abril.com.br/*
// @match        *://*.gaz.com.br/*
// @match        *://webcache.googleusercontent.com/search?q=cache:https://www.gaz.com.br/*
// @match        *://*.semprefamilia.com.br/*
// @match        *://*.uol.com.br/*
// @match        *://vocesa.abril.com.br/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js
// @require      http://localhost:8080/API/getCDN?file=snackjs
// @require      http://localhost:8080/API/getCDN?file=blockCorePaywall
// @require      http://localhost:8080/API/getCDN?file=glidejs
// @require      http://localhost:8080/API/getCDN?file=app_respondeai
// @require      http://localhost:8080/API/getCDN?file=respondeai
// @require      http://localhost:8080/API/getCDN?file=valorecon
// @require      http://localhost:8080/API/getCDN?file=exame
// @require      http://localhost:8080/API/getCDN?file=jota
// @require      http://localhost:8080/API/getCDN?file=nytimes
// @require      http://localhost:8080/API/getCDN?file=elpais
// @require      http://localhost:8080/API/getCDN?file=gauchazh
// @require      http://localhost:8080/API/getCDN?file=opopular
// @require      http://localhost:8080/API/getCDN?file=diariosm
// @require      http://localhost:8080/API/getCDN?file=otempomg
// @require      http://localhost:8080/API/getCDN?file=jornaldocomercio
// @require      http://localhost:8080/API/getCDN?file=opovo
// @require      http://localhost:8080/API/getCDN?file=gaz
// @require      http://localhost:8080/API/getCDN?file=possoler
// @require      http://localhost:8080/API/getCDN?file=att_versao
// @require      http://localhost:8080/API/getCDN?file=check_messages
// @require      http://localhost:8080/API/getCDN?file=count_content
// @require      http://localhost:8080/API/getCDN?file=save_site_access
// @grant        GM_webRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @webRequest   [{"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"}, {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"}, {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}, {"selector": "*://cdn.tinypass.com/api/tinypass.min.js*", "action": "cancel"}, {"selector": "*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector":"*://blockv4.fivewall.com.br/paywall.js*","action":"cancel"}, {"selector":"*://acesso.estadao.com.br/paywall*","action":"cancel"}, {"selector":"*://paywall.folha.uol.com.br/*","action":"cancel"}, {"selector":"*://*/arc/subs/p.min.js","action":"cancel"}, {"selector":"*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*","action":"cancel"}, {"selector":"*://folhadelondrina.com.br/themes/default/js/paywall/fivewall1.26.js*","action":"cancel"}, {"selector":"*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*","action":"cancel"}, {"selector":"*://me.jsuol.com.br/*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/auth*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/auth/auth_new_menu.min.js*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/paywall_config.min.js*","action":"cancel"}, {"selector":"*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*","action":"cancel"}, {"selector":"*://static.infoglobo.com.br/paywall/js/tiny.js*","action":"cancel"}, {"selector":"*://assine.correio24horas.com.br/v2/amp/subscriber/auth*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/materia.js","action":"cancel"}, {"selector":"*://*c2.piano.io/*","action":"cancel"}, {"selector":"*://paywall.correiodopovo.com.br/*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/article.js","action":"cancel"}, {"selector":"*://*.respondeai.com.br/conteudo/js/vendor.js","action":"cancel"}, {"selector":"*://static.elpais.com/dist/resources/js/*/ENP-closed-article-layer.js","action":"cancel"}, {"selector":"*://d.jornaldocomercio.com/_conteudo/_files/json/paywall.json","action":"cancel"}, {"selector":"*://*.jornaldocomercio.com/src/inove/paywall.php","action":"cancel"}, {"selector":"*://*saude.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*","action":"cancel"}, {"selector":"*://*.jornaldocomercio.com/src/inove/paywall.php","action":"cancel"}, {"selector":"*://app.respondeai.com.br/protect.js","action":"cancel"}, {"selector":"*://*.estadao.com.br/access.js","action":"cancel"}, {"selector":"*://vocesa.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*","action":"cancel"}, {"selector":"*://*.respondeai.com.br/conteudo/js/script.js","action":"cancel"}, {"selector":"*://cdn.piano.io/api/tinypass.min.js", "action":"cancel"}]
// @run-at       document-start
// @noframes
// ==/UserScript==

const DOMAIN = "http://localhost:8080";
importCDNSnackBar();
let currentURL = window.location.hostname;


if(currentURL.includes("folha.uol.com.br")){
    blockPaywallRequest("*://paywall.folha.uol.com.br/*");

}else if(currentURL.includes("estadao.com.br")){
    blockPaywallRequest("*://acesso.estadao.com.br/paywall*");

}else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
    blockPaywallRequest("*://static.infoglobo.com.br/paywall/js/tiny.js");
}
else if(currentURL.includes("gazetadopovo.com.br")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("super.abril.com.br")){
    blockPaywallRequest("*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
}
else if(currentURL.includes("quatrorodas.abril.com.br")){
    blockPaywallRequest("*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
}
else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
    blockPaywallRequest("*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
}
else if(currentURL.includes("guiadoestudante.abril.com.br")){
    blockPaywallRequest("*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
}
else if(currentURL.includes("exame.com")){
    blockPaywallRequest("*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*");
    modifyEXAME();
}
else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
    //MIGROU PARA O DOMINIO OGLOBO.COM
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("revistagalileu.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("epocanegocios.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("revistamarieclaire.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("globorural.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("revistapegn.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("jota.info")){
    modifyJOTA();
}
else if(currentURL.includes("nsctotal.com.br")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("nytimes.com")){
    modifyNYTIMES();
}
else if(currentURL.includes("elpais.com")){
    blockPaywallRequest("*://*/arc/subs/p.min.js");
    modifyELPAIS();
}
else if(currentURL.includes("jornalvs.com.br")){
    blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
}
// else if(
//     currentURL.includes("valor.globo.com") ||
//     window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com/")
// ){
//     modifyVLRECON();
// }
else if(currentURL.includes("gauchazh.clicrbs.com.br") || currentURL.includes("especiais.zh.clicrbs")){
    modifyGZH();
}
else if(currentURL.includes('jornaldocomercio.com')){
    blockPaywallRequest("*://*.jornaldocomercio.com/src/inove/paywall.php");
}
else if(currentURL.includes('economist.com')){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
// else if(
//     currentURL.includes('opopular.com.br') ||
//     window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/")
// ){
//     modifyOPOPULAR();
// }
else if(currentURL.includes('diariosm.com.br')){
    modifyDIARIOSM();
}
else if(currentURL.includes('otempo.com.br')){
    modifyOTEMPO();
}
else if(currentURL.includes("glamour.globo.com")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("degraoemgrao.blogfolha.uol.com.br")){
    blockPaywallRequest("*://paywall.folha.uol.com.br/*");
}
else if(currentURL.includes("jc.ne10.uol.com.br")){
    modyfyJORNALCOMERCIO();
}
else if(currentURL.includes("opovo.com.br")){
    blockPaywallRequest("*://mais.opovo.com.br/auth*");
    modifyOPOVO();
}
else if(currentURL.includes("correio24horas.com.br")){
    blockPaywallRequest("*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*")
}
else if(currentURL.includes("jornalnh.com.br")){
    blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
}
else if(currentURL.includes("atribuna.com.br")){
    blockPaywallRequest("*://*.atribuna.com.br/assets/js*/materia.js");
}
else if(currentURL.includes("umdoisesportes.com.br")){
    blockPaywallRequest("*://c2.piano.io/*");
}
else if(currentURL.includes("correiodopovo.com.br")){
    blockPaywallRequest("*://paywall.correiodopovo.com.br/*");
}
else if(currentURL.includes("revistacasaejardim.globo.com")){
    blockPaywallRequest("*://static.infoglobo.com.br/paywall/js/tiny.js*");
}
else if(currentURL.includes("saude.abril.com.br")){
    blockPaywallRequest("*://*saude.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*");
}
// else if(
//     currentURL.includes("gaz.com.br") ||
//     window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://www.gaz.com.br/")
// ){
//     modifyGAZ();
// }
else if(currentURL.includes("semprefamilia.com.br")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("uol.com.br")){
    blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
}
else if(currentURL.includes("vocesa.abril.com.br")){
    blockPaywallRequest("*://vocesa.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*");
}


/* ========================== DIARIO SANTA MARIA ===================================== */

function modifyDIARIOSM()
{
    //ADD JQUERY JS
    let jqueryJS = document.createElement('script');
    jqueryJS.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');
    document.body.appendChild(jqueryJS);

    let r = setInterval(()=>{
        if(verificaElemento('.row-bloqueio') && typeof($) == 'function' && findPaywallText()){
            clearInterval(r);

            try{
                let base64ParsedBody = CryptoJS.enc.Base64.parse(parsedBody);
                let cryptoKey = CryptoJS.enc.Base64.parse('u/Gu5posvwDsXUnV5Zaq4g==');
                let cryptoIv = CryptoJS.enc.Base64.parse('5D9r9ZVzEYYgha93/aUK2w==');

                $(".suita-artigo .row-conteudo .post-content").html(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt({
                    ciphertext: base64ParsedBody
                }, cryptoKey, {
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                    iv: cryptoIv,
                })));

                $(".suita-artigo .row-conteudo").show();
                $(".suita-artigo .videos").show();
                $(".suita-artigo .imagens").show();
                $(".suita-artigo .elementos").show();
                $(".suita-artigo .row-loading").hide();

                let u = setInterval(()=>{
                    if(typeof(twttr) == 'object'){
                        clearInterval(u);
                        twttr.widgets.load();
                    }
                },800);

                document.querySelector('.row-bloqueio').remove();

            }catch(erro){
                if(typeof(Swal) == 'function'){
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                    );
                }else{
                    alert(erro.toString());
                }
            }
        }
    },800);
}


function findPaywallText()
{
    let h1 = document.querySelectorAll('h1');
    for(let i=0; i<h1.length; i++){
        if(h1[i].textContent.includes("Conteúdo exclusivo!")){
            return true;
        }
    }
    return false;
}

/* ========================== EL PAIS ===================================== */

function modifyELPAIS()
{
    let r = setInterval(() => {
        if(verificaElemento('#ctn_freemium_article')){
            clearInterval(r);
            document.querySelector('#ctn_freemium_article').remove();
        }
    },800);

    setInterval(()=>{
        if(document.getElementById("elpais_gpt-INTEXT") != null){
            document.getElementById("elpais_gpt-INTEXT").style.height = "unset";
        }
    },800);
}

/* ========================== EXAME ===================================== */

function modifyEXAME()
{
    let r = setInterval(()=>{
        if(document.querySelector(".xm-paywall") != null && typeof(__NEXT_DATA__) == "object"){
            clearInterval(r);
            try{
                let unlockedContent = "";
                (__NEXT_DATA__.props.pageProps.postOrSubcategoryProps.postData).forEach((data)=>{
                    unlockedContent += (data.hasOwnProperty("content")) ? data.content : "";
                });
                document.querySelector(".news-content-container").innerHTML = unlockedContent;
            }catch(erro){
                let s = setInterval(()=>{
                    if(typeof(Swal) == 'function'){
                        clearInterval(s);
                        console.log('ACHEI SWALL');

                        if(Swal.isVisible() == false){
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                            );
                        }
                    }
                },800);
            }
        }
    },800)
}

/* ========================== GAUCHA ZH ===================================== */

function modifyGZH()
{
    enableUrlChangeDetect();
    removeHiddenClass();

    GM_webRequest([
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"},
        {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"},
        {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"},
        {"selector":"*://cdn.piano.io/api/tinypass.min.js", "action":"cancel"}
    ]);

    window.addEventListener('locationchange', ()=>{
        console.log('MUDEI URL');
    });
}


function removeHiddenClass() {
    setInterval(() => {
        let hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((element) => {
            element.classList.remove("hidden");
        });

        let paywallTemplate = document.getElementById("paywallTemplate");
        if(paywallTemplate) paywallTemplate.remove();

    },800);
}

/* ========================== GAZ ===================================== */

function modifyGAZ()
{
    if(window.location.hostname == "www.gaz.com.br"){
        let rotina = setInterval(()=>{
            if(verificaElemento('.paywall')){
                clearInterval(rotina);

                let intervalRequest = setInterval(()=>{
                    if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                        clearInterval(intervalRequest);

                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: `${DOMAIN}/API/cachemock/getArticleContent`,
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            }),
                            headers: {
                                "Content-Type" : "application/json"
                            }
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp);
                            let blocoNoticia = resp.data.content;
                            let blocoOriginal = getArticleGAZ(document);


                            let u = setInterval(()=>{
                                if(blocoNoticia != null && blocoOriginal != null){
                                    clearInterval(u);

                                    if(blocoNoticia != false && blocoOriginal != false){

                                        blocoOriginal.innerHTML = blocoNoticia;
                                        sweetAlert(
                                            'success',
                                            'Sucesso',
                                            'Ótimo! Conteúdo desbloqueado!'
                                        );
                                        removeUnloadedAdsBlocks();
                                    }else{
                                        sweetAlert(
                                            'warning',
                                            'Atenção',
                                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
                                        );
                                        return;
                                    }
                                }
                            },800);
                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    'https://gaz.com.br'
                                );
                            }else if(erro.response.status != 404){
                                sweetAlert(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                                );
                            }
                            else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
                            }
                        });
                    }
                },800);
            }
        },800);
    }else{
        //TRECHO DO CÓDIGO RESPONSÁVEL POR PEGAR CACHE DA PÁGINA

        //SET NO SCROLL PAGE
        let u = setInterval(()=>{
            if(verificaElemento('body')){
                clearInterval(u);
                document.body.style.cssText += 'overflow: hidden !important; position: fixed !important;';
            }
        },800);

        mountSweetAlert(
            'info',
            'Aguarde mais um momento...',
            'Estamos removendo os bloqueios para você...<br><br>'
        );

        let waitAxios = setInterval(()=>{
            if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                clearInterval(waitAxios);

                let key = genHashKey();

                //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                fetch(document.location.href)
                .then((response) => {
                    if(response.status == 200){
                        response.text().then(pageSource => {

                            pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                            let article = getArticleGAZ(pageSource);
                            let blocoNoticia = (article != null) ? article.outerHTML : pageSource.outerHTML;

                            let l = setInterval(()=>{
                                if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                    clearInterval(l);

                                    //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                    axios({
                                        method: 'POST',
                                        url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        }),
                                        headers : {
                                            "Content-Type" : "application/json"
                                        }
                                    }).then((resp)=>{
                                        if(resp.status == 201){
                                            window.location.replace(key.url);
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                "https://gaz.com.br"
                                            );
                                        }
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://gaz.com.br"
                                            );
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://gaz.com.br"
                                            );
                                        }
                                    });
                                }
                            },800);
                        }).catch((erro) => {
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://gaz.com.br"
                                );
                            }else{
                                if(erro.toString().includes('timeout')){
                                    SwalTimeout(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://gaz.com.br"
                                    );
                                }else{
                                    SwalGotoHome(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://gaz.com.br"
                                    );
                                }
                            }
                        });
                    }else if(response.status == 404){
                        SwalGotoHome(
                            'warning',
                            'Atenção',
                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                            "https://gaz.com.br"
                        );
                    }else{
                        throw `Wrong HTTPS Status on get cache content - HTTPS STATUS ${response.status}`;
                    }
                }).catch((erro)=>{
                    if(erro.toString().includes('timeout')){
                        SwalTimeout(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://gaz.com.br"
                        );
                    }else{
                        SwalGotoHome(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://gaz.com.br"
                        );
                    }
                });
            }
        },800);
    }
}


function getArticleGAZ(pageSource)
{
    if(pageSource.getElementById("primary") != null && pageSource.getElementById("primary") != undefined) {
        return pageSource.getElementById("primary");
    }
    if(pageSource.querySelector(".site-main") != null && pageSource.querySelector(".site-main") != undefined) {
        return pageSource.querySelector(".site-main");
    }
    return null;
}


function removeUnloadedAdsBlocks()
{
    unloadedsAds = document.querySelectorAll(".ads");
    unloadedsAds.forEach((ads) => {ads.remove();});
}


function SwalTimeout(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Tentar novamente`,
                showCancelButton: true,
                cancelButtonText: `Voltar para ${homeLink}`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.reload();
                else window.location.replace(homeLink);
            });
        }
    },800);
}


function SwalGotoHome(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Voltar para ${homeLink}`,
                //showDenyButton: true,
                //denyButtonText: `Fechar guia`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.replace(homeLink);
                /* else if(result.isDenied) window.close(); */
            });
        }
    },800);
}

/* ========================== JORNAL DO COMERCIO ===================================== */

function modyfyJORNALCOMERCIO()
{
    if((window.location.href).includes("https://impresso.jc.ne10.uol.com.br/")){

        if(window.location.href == "https://impresso.jc.ne10.uol.com.br/"){
            window.location.replace("https://impresso.jc.ne10.uol.com.br/index.php?id=/txt.php");
        }
        let r = setInterval(()=>{
            if(verificaElemento('#preloader-jconline')){
                clearInterval(r);
                document.getElementById("preloader-jconline").remove();
                blockPaywallRequest("*://me.jsuol.com.br/*");
            }
        },800);
    }
    else{
        blockPaywallRequest("*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*");
    }
}

/* ========================== JOTA ===================================== */

function modifyJOTA()
{
    let rotina = setInterval(()=>{
        if(verificaElemento("head")) {
            clearInterval(rotina);

            let links = document.head.querySelectorAll("link");
            let linkJSON;

            for(let i=0; i<links.length; i++)
            {
                if(links[i].getAttribute("href").includes("https://www.jota.info/wp-json/wp/v2/posts/"))
                {
                    linkJSON = links[i].getAttribute("href");
                    getJsonConteudoNoticia(linkJSON);
                    break;
                }
            }
            removeBloqueioPaywallJOTA();
        }
    },800);
}


function getJsonConteudoNoticia(link)
{
    let rotina = setInterval(()=>{
        if(typeof(axios) == 'function') {
            clearInterval(rotina);

            axios({
                method: "GET",
                url: link,
                timeout: 15000
            }).then((resp)=>{
                let respFunction = setNoticiaContainerJOTA(resp.data.content.rendered);

                let rotina = setInterval(()=>{
                    if (respFunction != null || respFunction != undefined) {
                        clearInterval(rotina);
                        console.log("TENHO RESPOSTA FUNCTION JOTA = "+respFunction);
                        removeBannerProJOTA();
                    }
                },800);

            }).catch((erro)=>{
                console.error(erro);
            });
        }
    },800)
}


function setNoticiaContainerJOTA(noticia)
{
    let childrenContainer = document.querySelector(".jota-article__content").children;
    let arrayPossibleAttributes = ["style", "data-amp-original-style"];

    for(let i=0; i<childrenContainer.length; i++) {
        for(let j=0; j<arrayPossibleAttributes.length; j++) {
            if(childrenContainer[i].hasAttribute(arrayPossibleAttributes[j])) {
                if(childrenContainer[i].getAttribute(arrayPossibleAttributes[j]).includes("font-weight:400"))
                {
                    childrenContainer[i].innerHTML = `${noticia}`;
                    return 1;
                }
            }
        }
    }

    return 0;
}


function removeBloqueioPaywallJOTA()
{
    let rotina = setInterval(()=>{
        if(verificaElemento(".jota-paywall__wrap"))
        {
            clearInterval(rotina);
            document.querySelector(".jota-paywall__wrap").remove();
        }
    },800);
}


function removeBannerProJOTA()
{
    let links = document.querySelectorAll("a");

    for(let i=0; i<links.length; i++) {
        if(links[i].getAttribute("href").includes("source=Banner"))
        {
            links[i].parentElement.remove();
        }
    }
}

/* ========================== NY TIMES ===================================== */

function modifyNYTIMES()
{
    let r = setInterval(()=>{
        if(verificaElemento("#gateway-content")){
            clearInterval(r);
            document.querySelector("#gateway-content").remove();

            let article = document.querySelector(".css-mcm29f");
            if(article != null) {
                article.style.cssText += "position: unset !important; overflow: auto !important;";
            }

            let blackDiv = document.querySelector('.css-gx5sib');
            if(blackDiv != null) blackDiv.remove();
        }
    }, 800);
}

/* ========================== O POPULAR ===================================== */

function modifyOPOPULAR()
{
    if(window.location.hostname == "opopular.com.br"){

        let rotina = setInterval(()=>{
            if(verificaElemento('.locked-news')){
                clearInterval(rotina);

                let articlesIsRemoved = removeArticles();
                hideKeepReadingChildren();
                removeAdBetweenArticles();
                removeCommentDiv();

                let y = setInterval(()=>{
                    if(verificaElemento('.locked-news') && articlesIsRemoved && typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                        clearInterval(y);

                        mountSweetAlert(
                            'info',
                            'Aguarde um momento...',
                            'Estamos removendo os bloqueios para você...<br><br>'
                        );

                        //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                        axios({
                            method: 'POST',
                            url: `${DOMAIN}/API/cachemock/getArticleContent`,
                            timeout: 30000,
                            data: JSON.stringify({
                                key: btoa(window.location.pathname)
                            }),
                            headers: {
                                "Content-Type" : "application/json"
                            }
                        }).then((resp)=>{
                            console.clear();
                            console.log('SUCESSO GET PAGE CODE');
                            console.log(resp.data);


                            let cacheSourceCode = new DOMParser().parseFromString(resp.data.content, "text/html");
                            let blocoNoticia = getArticleBodyPOPULAR(cacheSourceCode);
                            let blocoOriginal = getArticleBodyPOPULAR(document);

                            let u = setInterval(()=>{
                                if(blocoNoticia != null && blocoOriginal != null){
                                    clearInterval(u);

                                    console.log(`CODE CACHE = ${blocoNoticia.outerHTML}`);
                                    console.log(`CODE ORIGINAL = ${blocoOriginal.outerHTML}`);

                                    if(blocoNoticia != false && blocoOriginal != false){

                                        blocoOriginal.innerHTML = blocoNoticia.outerHTML;
                                        sweetAlert(
                                            'success',
                                            'Sucesso',
                                            'Ótimo! Conteúdo desbloqueado!'
                                        );

                                        //VERIFICA E OCULTA KEEP READING CHILDREN
                                        fixVideoRender();
                                        hideKeepReadingChildren();
                                        removeLockedNewsContainers();
                                        removeArticles();
                                        removeAdBetweenArticles();
                                        removeCommentDiv();

                                    }else{
                                        sweetAlert(
                                            'warning',
                                            'Atenção',
                                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
                                        );
                                        return;
                                    }
                                }
                            },800);

                        }).catch((erro)=>{
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
                                    'https://opopular.com.br'
                                );
                            }else if(erro.response.status != 404){
                                sweetAlert(
                                    'error',
                                    'Atenção',
                                    `Ops, tivemos um pequeno problema!<br> Por favor, recarregue a página para tentar novamente.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                                );
                            }else{
                                setTimeout(()=>{
                                    window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                },1500);
                            }
                        });
                    }
                },800);
            }
        },800);
    }else{
        //TRECHO DO CÓDIGO RESPONSÁVEL POR PEGAR CACHE DA PÁGINA

        //SET NO SCROLL PAGE
        let u = setInterval(()=>{
            if(verificaElemento('body')){
                clearInterval(u);
                document.body.style.cssText += 'overflow: hidden !important; position: fixed !important;';
            }
        },800);

        mountSweetAlert(
            'info',
            'Aguarde mais um momento...',
            'Estamos removendo os bloqueios para você...<br><br>'
        );

        let waitAxios = setInterval(()=>{
            if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                clearInterval(waitAxios);

                let key = genHashKey();

                //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                fetch(document.location.href)
                .then((response) => {
                    if(response.status == 200){
                        response.text().then(pageSource => {

                            pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                            let article = getArticleBodyPOPULAR(pageSource);
                            let blocoNoticia = (article != false) ? article.outerHTML : pageSource.outerHTML;

                            console.clear();

                            let l = setInterval(()=>{

                                try{
                                    console.log(`KEY = ${key}`);
                                    console.log(`PAGE SOURCE = ${pageSource != null}`);
                                    console.log(`BLOCO NOTICIA = ${blocoNoticia.outerHTML}`);
                                }catch(erro){

                                }
                                if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                    clearInterval(l);

                                    //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                    axios({
                                        method: 'POST',
                                        url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(key.hash),
                                            pageSource: blocoNoticia
                                        }),
                                        headers: {
                                            "Content-Type" : "application/json"
                                        }
                                    }).then((resp)=>{
                                        if(resp.status == 201) {
                                            window.location.replace(key.url);
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                "https://opopular.com.br"
                                            );
                                        }
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://opopular.com.br"
                                            );
                                        }else{
                                            SwalGotoHome(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://opopular.com.br"
                                            );
                                        }
                                    });
                                }
                            },800);
                        }).catch((erro) => {
                            if(erro.toString().includes('timeout')){
                                SwalTimeout(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://opopular.com.br"
                                );
                            }else{
                                SwalGotoHome(
                                    'error',
                                    'Erro',
                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                    "https://opopular.com.br"
                                );
                            }
                        });
                    }else if(response.status == 404){
                        SwalGotoHome(
                            'warning',
                            'Atenção',
                            'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                            "https://opopular.com.br"
                        );
                    }else{
                        throw `Wrong HTTPS Status on get cache content - HTTPS STATUS ${response.status}`;
                    }
                }).catch((erro)=>{
                    if(erro.toString().includes('timeout')){
                        SwalTimeout(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://opopular.com.br"
                        );
                    }else{
                        SwalGotoHome(
                            'error',
                            'Erro',
                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                            "https://opopular.com.br"
                        );
                    }
                });
            }
        },800);
    }
}



function getArticleBodyPOPULAR(scope)
{
    let articles = scope.querySelectorAll('section');

    for(let i=0; i<articles.length; i++){
        if(articles[i].hasAttribute("itemprop")){
            if(articles[i].getAttribute("itemprop").includes("articleBody")){
                return articles[i];
            }
        }
    }

    return false;
}


function hideKeepReadingChildren()
{
    let keepReadingChildren;
    if(verificaElemento("#keep-reading")){
        keepReadingChildren = document.getElementById("keep-reading").children;
        for(let i=0; i<keepReadingChildren.length; i++){
            if(i==0) continue;
            keepReadingChildren[i].style.display = 'none';
        }

        if(verificaElemento('.for-top-news')){
            document.querySelector('.for-top-news').remove();
        }
    }
    return false;
}


function removeLockedNewsContainers()
{
    let lockedNews = document.querySelectorAll('.locked-news');
    for(let i=0; i<lockedNews.length; i++){
        lockedNews[i].remove();
    }
}


function removeArticles()
{
    let allArticles = document.querySelectorAll('article');
    for(let i=0; i<allArticles.length; i++){
        if(i==0) continue;
        allArticles[i].remove();
    }
    return true;
}


function removeAdBetweenArticles()
{
    let allAdBetweenArticles = document.querySelectorAll('.ad-between-articles');
    for(let i=0; i<allAdBetweenArticles.length; i++){
        allAdBetweenArticles[i].remove();
    }
}


function fixVideoRender()
{
    if(window.location.href.includes('/videos')){
        let iframes = document.querySelectorAll('iframe');
        for(let i=0; i<iframes.length; i++){
            if(iframes[i].hasAttribute('src')){
                let currentSrc = iframes[i].getAttribute('src');
                iframes[i].removeAttribute('src');
                iframes[i].setAttribute('src', currentSrc);
            }
        }
    }
}


function removeCommentDiv()
{
    if(verificaElemento('.comment')){
        document.querySelector('.comment').remove();
    }
}

/* ========================== O POVO ===================================== */

function modifyOPOVO()
{
    if(window.location.href == "https://mais.opovo.com.br/"){
        window.location.assign("https://mais.opovo.com.br/home");
    }
}

/* ========================== O TEMPO - MG ===================================== */

function modifyOTEMPO()
{
    if(new URLSearchParams(window.location.search).get('aId') == null) {
        let r = setInterval(()=>{
            let paywallBlock = document.querySelector('.reset-overlay');
            if(paywallBlock != null){
                clearInterval(r);
                paywallBlock.remove();
            }
        },800);
    }else{
        let r = setInterval(()=>{
            if(verificaElemento('#div-paywall-element')){
                clearInterval(r);

                //MONTA SWEET ALERT DE DESBLOQUEIO
                let s = setInterval(()=>{
                    if(typeof(Swal) == 'function'){
                        clearInterval(s);
                        console.log('ACHEI SWALL');

                        if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
                            sweetAlert(
                                'info',
                                'Aguarde um momento...',
                                'Estamos removendo os bloqueios para você...<br><br>'
                            );
                        }
                    }
                },800);

                //TENTA REQUEST COM AXIOS PARA PEGAR TOKEN
                let waitAxios = setInterval(()=>{
                    if(typeof(axios) == 'function'){
                        clearInterval(waitAxios);
                        axios({
                            method: 'GET',
                            url: `${DOMAIN}/API/jornal_otempo/getRestServiceTokenEncoded`,
                            timeout: 30000
                        }).then((resp)=>{
                            const TOKEN_ENCODED = resp.data.otempo_REST_SERVICE_TOKEN_ENCODED;

                            let waitPolopoly = setInterval(()=>{
                                if(typeof(polopoly) == 'object'){
                                    clearInterval(waitPolopoly);

                                    const TOKEN_DECODED = polopoly.base64.decode(TOKEN_ENCODED);
                                    const GUID = getArticleGuid();

                                    //REQUEST PARA PEGAR CONTEUDO DA MATÉRIA
                                    let t = setInterval(()=>{
                                        if(TOKEN_DECODED != null && GUID != null){
                                            clearInterval(t);
                                            let conteudoMateria = "";

                                            axios({
                                                method: 'GET',
                                                url: `${window.location.origin}/rest-services/emotion-service/noticia?guid=${GUID}&token=${TOKEN_DECODED}`,
                                                timeout: 30000,
                                                headers: {'accept': 'application/json'}
                                            }).then((resp)=>{

                                                for(let i=0; i<resp.data.length; i++){
                                                    //GET CONTENT
                                                    if(resp.data[i].hasOwnProperty('content')){
                                                        if(resp.data[i].content != "" && resp.data[i].content != undefined){
                                                            conteudoMateria += resp.data[i].content;
                                                        }
                                                    }

                                                    //GET NOTAS
                                                    if(resp.data[i].hasOwnProperty('notas')){
                                                        for(let n=0; n<resp.data[i].notas.length; n++){

                                                            //GET TITLE NOTA[n]
                                                            if(resp.data[i].hasOwnProperty('title')){
                                                                conteudoMateria += `<h4 style="font-size: 18px !important; font-weight: 700 !important;">${resp.data[i].notas[n].title}</h4>`;
                                                            }

                                                            //GET CONTENT NOTA[n]
                                                            if(resp.data[i].notas[n].hasOwnProperty('content')){
                                                                conteudoMateria += resp.data[i].notas[n].content;
                                                            }
                                                        }
                                                    }
                                                }

                                                let waitConteudoMateria = setInterval(()=>{
                                                    if(conteudoMateria != null){
                                                        clearInterval(waitConteudoMateria);
                                                        try{
                                                            document.querySelector('.artigo-conteudo-article').innerHTML += conteudoMateria;
                                                            sweetAlert(
                                                                'success',
                                                                'Sucesso',
                                                                'Ótimo! Conteúdo desbloqueado!'
                                                            );

                                                            removePaywallBanner();
                                                            restoreImgs();
                                                        }catch(erro){
                                                            sweetAlert(
                                                                'error',
                                                                'Erro',
                                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                                                            );
                                                        }
                                                    }
                                                },800);

                                            }).catch((erro)=>{
                                                sweetAlert(
                                                    'error',
                                                    'Erro',
                                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>[O Tempo Request] ${erro.toString()}`
                                                );
                                            });
                                        }
                                    },800);
                                }
                            },800);
                        }).catch((erro)=>{
                            sweetAlert(
                                'error',
                                'Erro',
                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>[Internal API Request] ${erro.toString()}`
                            );
                        });
                    }
                },800);
            }
        },800);
    }
}


function getArticleGuid() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('aId');
}


function removePaywallBanner()
{
    if(verificaElemento('.reset-overlay')) document.querySelector('.reset-overlay').remove();
}


function restoreImgs()
{
    let imgs = document.querySelectorAll('img');

    for(let i=0; i<imgs.length; i++){
        if(imgs[i].hasAttribute('data-src')){
            let currentAttributeValue = imgs[i].getAttribute("data-src");
            imgs[i].setAttribute("src", currentAttributeValue);
        }
    }
}

/* ========================== VALOR ECONOMICO ===================================== */

function modifyVLRECON()
{

    let waitAxios = setInterval(()=>{
        if(typeof(axios) == "function" && typeof(Swal) == 'function') {
            clearInterval(waitAxios);

            axios({
                method: "GET",
                url: `${DOMAIN}/API/paywalldom/valoreconomicoConfigs`,
                timeout: 10000
            }).then((responseConfigs)=>{
                if(!responseConfigs.data.enabledCacheMock) return;

                if(window.location.hostname == "valor.globo.com"){
                    let rotina = setInterval(()=>{

                        if(elementExistInList(responseConfigs.data.paywallNames)){
                            clearInterval(rotina);

                            let intervalRequest = setInterval(()=>{
                                if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                                    clearInterval(intervalRequest);

                                    mountSweetAlert(
                                        'info',
                                        'Aguarde um momento...',
                                        'Estamos removendo os bloqueios para você...<br><br>'
                                    );

                                    //RECUPERA ARQUIVO COM CONTEUDO DESBLOQUEADO
                                    axios({
                                        method: 'POST',
                                        url: `${DOMAIN}/API/cachemock/getArticleContent`,
                                        timeout: 30000,
                                        data: JSON.stringify({
                                            key: btoa(window.location.pathname)
                                        }),
                                        headers: {
                                            "Content-Type" : "application/json"
                                        }
                                    }).then((resp)=>{
                                        console.clear();
                                        console.log('SUCESSO GET PAGE CODE');
                                        console.log(resp);
                                        let blocoNoticia = resp.data.content;
                                        let blocoOriginal = getArticleValorEconomico(document, responseConfigs.data.containerContent);

                                        let u = setInterval(()=>{
                                            if(blocoNoticia != null && blocoOriginal != null){
                                                clearInterval(u);

                                                //console.log(`CODE CACHE = ${blocoNoticia.outerHTML}`);
                                                //console.log(`CODE ORIGINAL = ${blocoOriginal.outerHTML}`);

                                                if(blocoNoticia != false && blocoOriginal != false){

                                                    blocoOriginal.innerHTML = blocoNoticia;
                                                    sweetAlert(
                                                        'success',
                                                        'Sucesso',
                                                        'Ótimo! Conteúdo desbloqueado!'
                                                    );

                                                    setTimeout(()=>{
                                                        removeAds(responseConfigs.data.adsModel);
                                                        corrigeImgsCache(responseConfigs.data.skeletonImage);
                                                    },3000);

                                                    //VERIFICA E REMOVE SOFT PAYWALLS
                                                    let f = setInterval(()=>{
                                                        if(elementExistInList(responseConfigs.data.paywallNames)){
                                                            clearInterval(f);
                                                            removeBlockCelularVLRECON(responseConfigs.data.phonePaywallName);
                                                        }
                                                    },800);
                                                }else{
                                                    sweetAlert(
                                                        'warning',
                                                        'Atenção',
                                                        'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>'
                                                    );
                                                    return;
                                                }
                                            }
                                        },800);
                                    }).catch((erro)=>{
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                'https://valor.globo.com'
                                            );
                                        }else if(erro.response.status != 404){
                                            sweetAlert(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`
                                            );
                                        }
                                        else{
                                            setTimeout(()=>{
                                                window.location.assign(`https://webcache.googleusercontent.com/search?q=cache:${window.location.href}`);
                                            },1500);
                                        }
                                    });
                                }
                            },800);
                        }
                    },800);
                }else{
                    //TRECHO DO CÓDIGO RESPONSÁVEL POR PEGAR CACHE DA PÁGINA

                    //SET NO SCROLL PAGE
                    let u = setInterval(()=>{
                        if(verificaElemento('body')){
                            clearInterval(u);
                            document.body.style.cssText += 'overflow: hidden !important; position: fixed !important;';
                        }
                    },800);

                    mountSweetAlert(
                        'info',
                        'Aguarde mais um momento...',
                        'Estamos removendo os bloqueios para você...<br><br>'
                    );

                    let waitAxios = setInterval(()=>{
                        if(typeof(axios) == 'function' && verificaElemento('#styleSnack')){
                            clearInterval(waitAxios);

                            let key = genHashKey();

                            //FAZ GET PARA PRÓPRIA PAGINA PARA PEGAR CÓDIGO FONTE DELA
                            fetch(document.location.href)
                            .then((response) => {
                                if(response.status == 200){
                                    response.text().then(pageSource => {

                                        pageSource = new DOMParser().parseFromString(pageSource, 'text/html');
                                        let article = getArticleValorEconomico(pageSource, responseConfigs.data.containerContent);
                                        let blocoNoticia = (article != false) ? article.outerHTML : pageSource.outerHTML;

                                        let l = setInterval(()=>{
                                            if((key != null || key != undefined) && (pageSource != null || pageSource != undefined) && (blocoNoticia != null || blocoNoticia != undefined)){
                                                clearInterval(l);

                                                //FAZ POST PARA CRIAR ARQUIVO JSON COM CONTEUDO DA PÁGINA DE CACHE
                                                axios({
                                                    method: 'POST',
                                                    url: `${DOMAIN}/API/cachemock/saveArticleContent`,
                                                    timeout: 30000,
                                                    data: JSON.stringify({
                                                        key: btoa(key.hash),
                                                        pageSource: blocoNoticia
                                                    }),
                                                    headers : {
                                                        "Content-Type" : "application/json"
                                                    }
                                                }).then((resp)=>{
                                                    if(resp.status == 201){
                                                        window.location.replace(key.url);
                                                    }else{
                                                        SwalGotoHome(
                                                            'error',
                                                            'Erro',
                                                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: [API FAILED TO CREATE FILE] - </spam>${resp.data}`,
                                                            "https://valor.globo.com"
                                                        );
                                                    }
                                                }).catch((erro)=>{
                                                    if(erro.toString().includes('timeout')){
                                                        SwalTimeout(
                                                            'error',
                                                            'Erro',
                                                            `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                            "https://valor.globo.com"
                                                        );
                                                    }else{
                                                        SwalGotoHome(
                                                            'error',
                                                            'Erro',
                                                            `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                            "https://valor.globo.com"
                                                        );
                                                    }
                                                });
                                            }
                                        },800);
                                    }).catch((erro) => {
                                        if(erro.toString().includes('timeout')){
                                            SwalTimeout(
                                                'error',
                                                'Erro',
                                                `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                "https://valor.globo.com"
                                            );
                                        }else{
                                            if(erro.toString().includes('timeout')){
                                                SwalTimeout(
                                                    'error',
                                                    'Erro',
                                                    `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                    "https://valor.globo.com"
                                                );
                                            }else{
                                                SwalGotoHome(
                                                    'error',
                                                    'Erro',
                                                    `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                                    "https://valor.globo.com"
                                                );
                                            }
                                        }
                                    });
                                }else if(response.status == 404){
                                    SwalGotoHome(
                                        'warning',
                                        'Atenção',
                                        'Ops, ainda não é possível desbloquear essa página. <br>Por favor, tente acessar a noticia mais tarde.<br><br>',
                                        "https://valor.globo.com"
                                    );
                                }else{
                                    throw `Wrong HTTPS Status on get cache content - HTTPS STATUS ${response.status}`;
                                }
                            }).catch((erro)=>{
                                if(erro.toString().includes('timeout')){
                                    SwalTimeout(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://valor.globo.com"
                                    );
                                }else{
                                    SwalGotoHome(
                                        'error',
                                        'Erro',
                                        `Ops, tivemos um pequeno problema!<br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro}`,
                                        "https://valor.globo.com"
                                    );
                                }
                            });
                        }
                    },800);
                }
            }).catch((erro)=>{
                if(erro.toString().includes('timeout')){
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente utilizando uma conexão mais rápida.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`,
                    );
                }else{
                    sweetAlert(
                        'error',
                        'Erro',
                        `Ops, tivemos um pequeno problema!<br>Por favor, tente novamente mais tarde.<br><br><spam style='font-weight: bold !important;'>Código do erro: </spam>${erro.toString()}`
                    );
                }
            })
        }
    },800);
}


function SwalTimeout(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Tentar novamente`,
                showCancelButton: true,
                cancelButtonText: `Voltar para ${homeLink}`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.reload();
                else window.location.replace(homeLink);
            });
        }
    },800);
}


function SwalGotoHome(icon, title, msg, homeLink)
{
    let r = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(r);

            Swal.fire({
                icon: icon,
                title: title,
                html: msg,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: `Voltar para ${homeLink}`,
                //showDenyButton: true,
                //denyButtonText: `Fechar guia`,
                backdrop: 'rgba(8, 8, 8, 0.92)',
                customClass: {
                    popup: 'snackZ-index',
                    container: 'snackZ-index'
                }
            }).then((result) => {
                if(result.isConfirmed) window.location.replace(homeLink);
                /* else if(result.isDenied) window.close(); */
            });
        }
    },800);
}


function genHashKey()
{
    let url = window.location.href;
    let part2 = url.split("cache:");
    let uri = part2[part2.length-1];

    if(uri.includes('valor.globo.com')){
        return {hash: `/${uri.split('valor.globo.com/')[1]}`, url: uri};
    }
    if(uri.includes('opopular.com.br')){
        return {hash: `/${uri.split('opopular.com.br/')[1]}`, url: uri};
    }
    if(uri.includes('gaz.com.br')){
        return {hash: `/${uri.split('gaz.com.br/')[1]}`, url: uri};
    }
}


function mountSweetAlert(icon, title, msg)
{
    //MONTA SWEET ALERT DE DESBLOQUEIO
    let s = setInterval(()=>{
        if(typeof(Swal) == 'function'){
            clearInterval(s);
            console.log('ACHEI SWALL');
            if(Swal.isVisible() == false && verificaElemento('#styleSnack')){
                sweetAlert(icon, title, msg);
            }
        }
    },800);
}


function corrigeImgsCache(skeletonImageConfig)
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains(`${skeletonImageConfig}`)){
            divs[i].classList.remove(`${skeletonImageConfig}`);
            divs[i].style.cssText += 'padding-top: 0 !important;';
        }
    }
}


function removeBlockCelularVLRECON(phonePaywall)
{

    try{
        let block = document.querySelector(`.${phonePaywall}`);

        if(block != null || block != undefined)
        {
            block.remove();
            document.body.style.overflow = "auto";
        }
    }catch(erro){
        console.error('ERRO')
    }
}


function sweetAlert(icon, title, msg)
{
    let opt = (icon == 'info') ? false : true;
    let backdropColor;
    Swal.close();

    backdropColor = (
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://gaz.com.br")
    )
        ? 'rgba(8, 8, 8, 0.92)' : '';


    if(icon == 'success'){
        Swal.fire({
            icon: icon,
            title: title,
            html: msg,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: opt,
            timer: 7000,
            timerProgressBar: true,
            customClass: {
                popup: 'snackZ-index',
                container: 'snackZ-index'
            }
        });
        window.stop();
        return;
    }

    Swal.fire({
        icon: icon,
        title: title,
        html: msg,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: opt,
        backdrop: backdropColor,
        customClass: {
            popup: 'snackZ-index',
            container: 'snackZ-index'
        }
    });
}


function getArticleValorEconomico(scope, containerContentConfig)
{
    let protectedArticle = scope.querySelector(`.${containerContentConfig}`);
    return (protectedArticle != null && protectedArticle != undefined)
        ? protectedArticle
        : false;
}


function removeAds(adsConfig)
{
    let divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].hasAttribute(`${adsConfig.adsClassName}`)){
            if(divs[i].getAttribute(`${adsConfig.adsClassName}`).includes(`${adsConfig.adsKeyword}`)){
                divs[i].remove();
            }
        }
    }
}


function elementExistInList(elementList)
{
    for(let i=0; i<elementList.length; i++) {
        if(document.querySelector(`.${elementList[i]}`) != null){
            return true;
        }
    }
    return false;
}



/* ========================== METODOS E VARIAVEIS GLOBAIS ===================================== */


function verificaElemento(elemento)
{
    return document.querySelector(elemento) != null;
}


/* Obrigado Stackoverflow -
https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript */
function enableUrlChangeDetect()
{
    history.pushState = ( f => function pushState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.pushState);

    history.replaceState = ( f => function replaceState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.replaceState);

    window.addEventListener('popstate',()=>{
        window.dispatchEvent(new Event('locationchange'))
    });
}


function blockPaywallRequest(urlBlock)
{
    const BLOCKED_URL_REQUEST = urlBlock;

    GM_webRequest([
        {"selector": BLOCKED_URL_REQUEST, "action": "cancel"},
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');
    });
}


/* =========================== CDN's ================================= */

function importCDNSnackBar()
{
    if(!verificaElemento("head")){
        console.log("No HEAD")
        setTimeout(()=>{
            importCDNSnackBar();
        }, 1000);
        return;
    }

    //ADD CSS TOASTFY NO HEAD HTML
    var snackCSS = document.createElement('link');
    snackCSS.setAttribute('id','snackCSS');
    snackCSS.setAttribute('rel','stylesheet');
    snackCSS.setAttribute('type','text/css');
    snackCSS.setAttribute('href',`${DOMAIN}/API/getCDN?file=snackcss`);
    document.head.appendChild(snackCSS);

    //ADD CSS CLASSE SNACKBAR
    var styleSnack = document.createElement('style');
    styleSnack.setAttribute('id', 'styleSnack');
    document.head.appendChild(styleSnack);
    styleSnack.innerText = '.snackZ-index{z-index: 9999999999 !important; white-space: pre-wrap;} .snackBarMsg{z-index: 9999999999 !important; white-space: pre-wrap; border: solid; border-image-slice: 1; border-image-source: linear-gradient(to left, #00C853, #a1ff00);}';

    //ADD IFRAME RESPONDEAI CSS
    var respaiCSS = document.createElement('style');
    respaiCSS.setAttribute('id', 'respaiCSS');
    document.head.appendChild(respaiCSS);
    respaiCSS.innerText = '.respai{width: 100% !important; height: 100% !important; margin: 0px 0px !important; white-space: pre-wrap} .contentSolution{height: 100% !important; padding: 0px !important;} .headerPopup{background-color: #f9f7f7 !important; margin-right: 1.2em !important;} .text-left{text-align: left !important;}';

    //ADD IFRAME LOG_REPORT CSS
    var logReportCSS = document.createElement('style');
    logReportCSS.setAttribute('id', 'logReportCSS');
    document.head.appendChild(logReportCSS);
    logReportCSS.innerText = '.zIndex{z-index:999999;} .logReport{width: 85% !important; height: 100% !important; margin: 0px 0px !important; white-space: pre-wrap} .contentLogReport{height: 100% !important; padding: 0px !important;} .marginTop{margin-top: 80px}';

    //ADD SWEETALERT JS
    let sweetAlertJS = document.createElement('script');
    sweetAlertJS.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@10');
    document.head.appendChild(sweetAlertJS);
}


/*
=> DETECTA MUDANÇA NA ARVORE DE ELEMENTOS DA DOM

document.addEventListener("DOMSubtreeModified", ()=>{
});

 */
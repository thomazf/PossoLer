// ==UserScript==
// @name         Posso Ler?
// @namespace    URL
// @version      2.9.8
// @description  Tenha acesso a noticias ilimitadas e conteudos exclusivos de forma gratuita e segura
// @author       snowom
// @supportURL   https://possoler.tech/
// @icon         https://possoler.tech/API/getCDN?file=possolerlogo
// @match        *://possoler.tech/*
// @match        *://*.possoler.tech/*
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
// @require      https://possoler.tech/API/getCDN?file=snackjs
// @require      https://possoler.tech/API/getCDN?file=blockCorePaywall
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
// @grant        GM_webRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @webRequest   [{"selector":"https://www.rbsonline.com.br/cdn/scripts/paywall.min.js*","action":"cancel"}, {"selector":"https://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*","action":"cancel"}, {"selector":"https://api.clicrbs.com.br/paywall-api/*","action":"cancel"}, {"selector": "*://cdn.tinypass.com/api/tinypass.min.js*", "action": "cancel"}, {"selector": "*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector": "*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*", "action": "cancel"}, {"selector":"*://blockv4.fivewall.com.br/paywall.js*","action":"cancel"}, {"selector":"*://acesso.estadao.com.br/paywall*","action":"cancel"}, {"selector":"*://paywall.folha.uol.com.br/*","action":"cancel"}, {"selector":"*://*/arc/subs/p.min.js","action":"cancel"}, {"selector":"*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*","action":"cancel"}, {"selector":"*://folhadelondrina.com.br/themes/default/js/paywall/fivewall1.26.js*","action":"cancel"}, {"selector":"*://s3.amazonaws.com/sdk-signin-wall-production/bundle.js*","action":"cancel"}, {"selector":"*://me.jsuol.com.br/*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/auth*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/auth/auth_new_menu.min.js*","action":"cancel"}, {"selector":"*://mais.opovo.com.br/includes/assets/opovomais/js/paywall_config.min.js*","action":"cancel"}, {"selector":"*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*","action":"cancel"}, {"selector":"*://static.infoglobo.com.br/paywall/js/tiny.js*","action":"cancel"}, {"selector":"*://assine.correio24horas.com.br/v2/amp/subscriber/auth*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/materia.js","action":"cancel"}, {"selector":"*://*c2.piano.io/*","action":"cancel"}, {"selector":"*://paywall.correiodopovo.com.br/*","action":"cancel"}, {"selector":"*://*.atribuna.com.br/assets/js*/article.js","action":"cancel"}, {"selector":"*://*.respondeai.com.br/conteudo/js/vendor.js","action":"cancel"}, {"selector":"*://static.elpais.com/dist/resources/js/*/ENP-closed-article-layer.js","action":"cancel"}, {"selector":"*://d.jornaldocomercio.com/_conteudo/_files/json/paywall.json","action":"cancel"}, {"selector":"*://*.jornaldocomercio.com/src/inove/paywall.php","action":"cancel"}, {"selector":"*://*saude.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*","action":"cancel"}, {"selector":"*://*.jornaldocomercio.com/src/inove/paywall.php","action":"cancel"}, {"selector":"*://app.respondeai.com.br/protect.js","action":"cancel"}, {"selector":"*://*.estadao.com.br/access.js","action":"cancel"}, {"selector":"*://vocesa.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*","action":"cancel"}, {"selector":"*://*.respondeai.com.br/conteudo/js/script.js","action":"cancel"}, {"selector":"*://cdn.piano.io/api/tinypass.min.js", "action":"cancel"}]
// @run-at       document-start
// @noframes
// ==/UserScript==

importCDNSnackBar();
let currentURL = window.location.hostname;
const DOMAIN = "http://localhost:8080";
const CURRENT_VERSION = '297';


function main()
{
    if(currentURL.includes("folha.uol.com.br")){
        saveDataForDashboard(1);
        blockPaywallRequest("*://paywall.folha.uol.com.br/*");

    }else if(currentURL.includes("estadao.com.br")){
        saveDataForDashboard(2);
        blockPaywallRequest("*://acesso.estadao.com.br/paywall*");

    }else if(currentURL.includes("oglobo.globo.com") && !(window.location.href.includes("/epoca"))){
        saveDataForDashboard(3);
        blockPaywallRequest("*://static.infoglobo.com.br/paywall/js/tiny.js");
    }
    else if(currentURL.includes("gazetadopovo.com.br")){
        saveDataForDashboard(4);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("super.abril.com.br")){
        saveDataForDashboard(5);
        blockPaywallRequest("*://super.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    }
    else if(currentURL.includes("quatrorodas.abril.com.br")){
        saveDataForDashboard(6);
        blockPaywallRequest("*://quatrorodas.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    }
    else if(currentURL.includes("veja.abril.com.br") || (currentURL.includes("vejasp.abril"))){
        saveDataForDashboard(7);
        blockPaywallRequest("*://veja.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*")
    }
    else if(currentURL.includes("guiadoestudante.abril.com.br")){
        saveDataForDashboard(10);
        blockPaywallRequest("*://guiadoestudante.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall/js/*");
    }
    else if(currentURL == 'www.respondeai.com.br'){
        saveDataForDashboard(8);
        modifyRESPAI();
    }
    else if(currentURL == 'app.respondeai.com.br'){
        saveDataForDashboard(8);
        modifyAPPRESPAI();
    }
    else if(currentURL.includes("exame.com")){
        saveDataForDashboard(9);
        blockPaywallRequest("*://exame.com/wp-content/themes/exame-new/js/extd-acc.js*");
        modifyEXAME();
    }
    else if(currentURL.includes("oglobo.globo.com") && window.location.href.includes("/epoca")){
        //MIGROU PARA O DOMINIO OGLOBO.COM
        saveDataForDashboard(11);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistagalileu.globo.com")){
        saveDataForDashboard(13);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("epocanegocios.globo.com")){
        saveDataForDashboard(12);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistamarieclaire.globo.com")){
        saveDataForDashboard(14);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("globorural.globo.com")){
        saveDataForDashboard(15);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("revistapegn.globo.com")){
        saveDataForDashboard(26);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("possoler.tech")){
        modifyPossoLer();
    }
    else if(currentURL.includes("jota.info")){
        saveDataForDashboard(16);
        modifyJOTA();
    }
    else if(currentURL.includes("nsctotal.com.br")){
        saveDataForDashboard(17);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("nytimes.com")){
        saveDataForDashboard(18);
        modifyNYTIMES();
    }
    else if(currentURL.includes("elpais.com")){
        saveDataForDashboard(19);
        blockPaywallRequest("*://*/arc/subs/p.min.js");
        modifyELPAIS();
    }
    else if(currentURL.includes("jornalvs.com.br")){
        saveDataForDashboard(20);
        blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
    }
    else if(
        currentURL.includes("valor.globo.com") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://valor.globo.com/")
    ){
        saveDataForDashboard(21);
        modifyVLRECON();
    }
    else if(currentURL.includes("gauchazh.clicrbs.com.br") || currentURL.includes("especiais.zh.clicrbs")){
        modifyGZH();
    }
    else if(currentURL.includes('jornaldocomercio.com')){
        saveDataForDashboard(23);
        blockPaywallRequest("*://*.jornaldocomercio.com/src/inove/paywall.php");
    }
    else if(currentURL.includes('economist.com')){
        saveDataForDashboard(24);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(
        currentURL.includes('opopular.com.br') ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://opopular.com.br/")
    ){
        saveDataForDashboard(30);
        modifyOPOPULAR();
    }
    else if(currentURL.includes('diariosm.com.br')){
        saveDataForDashboard(31);
        modifyDIARIOSM();
    }
    else if(currentURL.includes('otempo.com.br')){
        saveDataForDashboard(32);
        modifyOTEMPO();
    }
    else if(currentURL.includes("glamour.globo.com")){
        saveDataForDashboard(33);
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("degraoemgrao.blogfolha.uol.com.br")){
        saveDataForDashboard(1);
        blockPaywallRequest("*://paywall.folha.uol.com.br/*");
    }
    else if(currentURL.includes("jc.ne10.uol.com.br")){
        saveDataForDashboard(34);
        modyfyJORNALCOMERCIO();
    }
    else if(currentURL.includes("opovo.com.br")){
        saveDataForDashboard(35);
        blockPaywallRequest("*://mais.opovo.com.br/auth*");
        modifyOPOVO();
    }
    else if(currentURL.includes("correio24horas.com.br")){
        saveDataForDashboard(36);
        blockPaywallRequest("*://correio-static.cworks.cloud/fileadmin/sites/correio24horas/js/all.js*")
    }
    else if(currentURL.includes("jornalnh.com.br")){
        saveDataForDashboard(37);
        blockPaywallRequest("*://blockv4.fivewall.com.br/paywall.js*");
    }
    else if(currentURL.includes("atribuna.com.br")){
        saveDataForDashboard(38);
        blockPaywallRequest("*://*.atribuna.com.br/assets/js*/materia.js");
    }
    else if(currentURL.includes("umdoisesportes.com.br")){
        saveDataForDashboard(39);
        blockPaywallRequest("*://c2.piano.io/*");
    }
    else if(currentURL.includes("correiodopovo.com.br")){
        saveDataForDashboard(40);
        blockPaywallRequest("*://paywall.correiodopovo.com.br/*");
    }
    else if(currentURL.includes("revistacasaejardim.globo.com")){
        saveDataForDashboard(41);
        blockPaywallRequest("*://static.infoglobo.com.br/paywall/js/tiny.js*");
    }
    else if(currentURL.includes("saude.abril.com.br")){
        saveDataForDashboard(42);
        blockPaywallRequest("*://*saude.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*");
    }
    else if(
        currentURL.includes("gaz.com.br") ||
        window.location.href.includes("webcache.googleusercontent.com/search?q=cache:https://www.gaz.com.br/")
    ){
        saveDataForDashboard(43);
        modifyGAZ();
    }
    else if(currentURL.includes("semprefamilia.com.br")){
        //saveDataForDashboard(44)
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("uol.com.br")){
        //saveDataForDashboard(45)
        blockPaywallRequest("*://cdn.tinypass.com/api/tinypass.min.js*");
    }
    else if(currentURL.includes("vocesa.abril.com.br")){
        //saveDataForDashboard(46)
        blockPaywallRequest("*://vocesa.abril.com.br/wp-content/plugins/abril-plugins/abril-paywall*");
    }
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



/* =========================== CDN's E UPDATE VERSION ================================= */


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
    snackCSS.setAttribute('href','https://possoler.tech/API/getCDN?file=snackcss');
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


function configSnackBar(msg, tituloBtn, tempo)
{
    return {
            text: msg,
            actionTextColor: '#a1ff00',
            actionText: tituloBtn,
            pos: 'top-right',
            duration: tempo*1000,
            customClass: 'snackBarMsg',
            onActionClick: ()=>{
                window.open('https://possoler.tech/#blockDownload');
            }
        };
}

function verificaAtualizacaoVersao()
{
    if(window.location.href.includes('possoler.tech')) return;

    let rotina = setInterval(()=>{
        if(typeof(Snackbar) == 'object'  && verificaElemento('#snackCSS') && typeof(axios) == 'function' && typeof(Swal) == 'function') {
            clearInterval(rotina);

            const URL_API_UPDATE = 'https://possoler.tech/API/searchUpdates';
            let tempoAwait = 5;

            axios({
                method: 'GET',
                url: URL_API_UPDATE,
                timeout: 20000,
            }).then((resposta)=>{
                let updateVersion = resposta.data.currentVersion;
                let msgUpdate = resposta.data.message;
                let tituloBtn = resposta.data.buttonMessage;
                let tempo = resposta.data.time;

                if(CURRENT_VERSION<updateVersion){

                    tempoAwait = 12;
                    let options = configSnackBar(msgUpdate,tituloBtn,tempo);
                    Snackbar.show(options);
                }

                verificaMensagensAPI(tempoAwait);

            }).catch((erro)=>{
                console.error(erro);
                verificaMensagensAPI(tempoAwait);
            });
        }
    }, 800);
}


function verificaMensagensAPI(time)
{
    const URL_MESSAGES = 'https://possoler.tech/API/searchMessages';

    let r = setInterval(()=>{
        if(typeof(axios) == 'function'){
            clearInterval(r);
            axios({
                method: 'GET',
                url: URL_MESSAGES,
                timeout: 40000,
            }).then((resposta)=>{

                if(resposta.data.messages.length>0){
                    setTimeout(()=>{
                        let qtdMessages = resposta.data.messages.length;
                        showSnackMessages(resposta, qtdMessages);
                    }, time*1000);
                }

            }).catch((erro)=>{
                console.error(erro);
            });
        }
    },800);
}


function showSnackMessages(resposta, qtdMessages)
{
    let tempoMensagemAPI = resposta.data.messages[contMessageIndex].time;

    let options = {
        text: resposta.data.messages[contMessageIndex].msg,
        actionTextColor: '#a1ff00',
        showAction: true,
        actionText: 'OK',
        pos: 'top-right',
        duration: tempoMensagemAPI*1000,
        customClass: 'snackBarMsg',
    };

    Snackbar.show(options);
    contMessageIndex++;
    tempoMensagemAPI++;

    setTimeout(()=>{
        if(contMessageIndex>=qtdMessages) return;
        showSnackMessages(resposta, qtdMessages);
    }, tempoMensagemAPI*1000);
}



/* ========================== API INCREMENTO DE NOTICIAS E CONTEUDOS LIBERADOS ====================== */

function incrementaConteudoAPI()
{
    const ENDPOINT_INCREMENTVIEWS = 'https://possoler.tech/API/incrementViewsConteudos';

    if(typeof(axios) == 'function'){
        axios({
            method: 'POST',
            url: ENDPOINT_INCREMENTVIEWS,
            timeout: 60000
        }).then((resposta)=>{
            console.log('Contabilizar noticia API = ' + resposta.data.status);
        }).catch((erro)=>{
            console.log('ERRO Contabilizar noticia API');
            console.log(erro);
        });
    }else if(self.fetch){
        fetch(ENDPOINT_INCREMENTVIEWS)
        .then(response => response.text())
        .then(pageSource => {
            console.log('Contabilizar noticia API = SUCESSO');
        }).catch((erro)=>{
            console.log('ERRO Contabilizar noticia API');
            console.log(erro);
        });
    }else{
        console.log('[INCREMENT API FAIL]');
    }
}



/* ========================== API INCREMENTO DE INFOS DASHBOARD SITE ====================== */

function getCurrentDate()
{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    return today;
}


function getCurrentTime()
{
    let today = new Date();
    let hh = String(today.getHours()).padStart(2, '0');
    let mm = String(today.getMinutes()).padStart(2, '0');
    let ss = String(today.getSeconds()).padStart(2, '0');
    today = `${hh}:${mm}:${ss}`;

    return today;
}


function saveDataForDashboard(codigoSite)
{
    let currentData = getCurrentDate();
    let currentTime = getCurrentTime();
    const ENDPOINT_DASHBOARD = 'https://possoler.tech/API/acessos/insertDadosAccess';

    let r = setInterval(()=>{
        if(currentData != null && currentTime != null){
            clearInterval(r);
            if(typeof(axios) == 'function'){
                axios({
                    method: 'POST',
                    url: ENDPOINT_DASHBOARD,
                    timeout: 30000,
                    data: JSON.stringify({
                        codigo_site: codigoSite,
                        data: currentData,
                        horario: currentTime
                    }),
                    headers : {
                        "Content-Type" : "application/json"
                    }
                }).then((resp)=>{
                    if(resp.status == 201){
                        console.log('[AXIOS] DASHBOARD DATA OK!');
                    }else{
                        console.log('[AXIOS] DASHBOARD DATA ERROR!');
                    }
                }).catch((erro)=>{
                    console.log('[AXIOS] FALHA DASHBOARD!', erro.toString());
                });
            }else if(self.fetch){
                fetch(ENDPOINT_DASHBOARD,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        codigo_site: codigoSite,
                        data: currentData,
                        horario: currentTime
                    })
                }).then(function(res){
                    if(res.status == 201) {
                        console.log('[FETCH] DASHBOARD DATA OK!');
                    }else{
                        console.log('[FETCH] DASHBOARD DATA ERROR!');
                    }
                }).catch((erro)=>{
                    console.log('[FETCH] FALHA DASHBOARD!', erro.toString());
                });
            }else{
                console.log('SEM AXIOS E FETCH DASHBOARD');
            }
        }
    },800);
}



/* ========================== METODOS E VARIAVEIS GLOBAIS ===================================== */

var contMessageIndex=0;

function elementExistInList(elementList)
{
    for(let i=0; i<elementList.length; i++) {
        if(document.querySelector(`.${elementList[i]}`) != null){
            return true;
        }
    }
    return false;
}


function verificaElemento(elemento)
{
    return document.querySelector(elemento) != null;
}


function blockPaywallRequest(urlBlock)
{
    const BLOCKED_URL_REQUEST = urlBlock;

    GM_webRequest([
        {"selector": BLOCKED_URL_REQUEST, "action": "cancel"},
    ], function(info, message, details) {
        console.log('PAYWALL BLOQUEADO');
    });

    if(typeof(axios) == 'function'){
        axios({
            method: 'GET',
            url: BLOCKED_URL_REQUEST,
            timeout: 10000
        }).then((resp)=>{
            console.log('SUCESSO REQUEST AXIOS');
        }).catch((erro)=>{
            console.log('FALHA REQUEST AXIOS');
            incrementaConteudoAPI();
        });
    } else if(self.fetch){
        fetch(BLOCKED_URL_REQUEST)
            .then(response => response.text())
            .then(pageSource => {
                console.log('SUCESSO REQUEST FETCH');
            }).catch((erro)=>{
                console.log('FALHA REQUEST FETCH');
                incrementaConteudoAPI();
            });
    }

    let r = setInterval(()=>{
        if(typeof(axios) == 'function'){
            clearInterval(r);
            verificaAtualizacaoVersao();
        }
    },800);
}

/*
=> DETECTA MUDANÇA NA ARVORE DE ELEMENTOS DA DOM

document.addEventListener("DOMSubtreeModified", ()=>{
});

 */
(function(){"use strict";
var $=function(id){return document.getElementById(id);};
var T={of:["Site oficial",1],un:["Universidade",1],ci:["Instituição científica",1],bd:["Base de dados pública",1],im:["Imprensa",0],rd:["Rede social ou blog",0]};
var M={a:"Apoia",c:"Contradiz",i:"Incompleta",d:"Descartar"};
var V={v:"Verdadeira",f:"Falsa",i:"Inconclusiva"};
var C=[
{t:"A cidade das ciclovias",lv:"Fácil",a:"v",
q:"A prefeitura de Vila Nova do Sul dobrou a malha cicloviária da cidade: de 42 km em 2020 para 84 km em 2025.",
ctx:"Um cartaz da campanha municipal usa esse número. Sua equipe precisa descobrir se ele se sustenta.",
res:"Duas fontes independentes (prefeitura e universidade) concordam, com metodologia aberta. As outras duas pistas não trazem prova alguma.",
p:[["of","Prefeitura de Vila Nova do Sul","14/03/2026","Relatório de Gestão 2025, p. 31: a malha cicloviária passou de 42 km (2020) para 84 km (dez/2025), conforme levantamento da Secretaria de Mobilidade.","a","Fonte primária do dado, com data e autoria. Mas é a própria prefeitura, então precisa de confirmação externa."],
["un","Observatório de Mobilidade, Univ. Federal do Vale","02/02/2026","Medição independente por GPS: 41,8 km de ciclovias e ciclofaixas em 2020 e 83,6 km em dez/2025. Metodologia e planilha abertas.","a","Fonte independente com método aberto; os números batem com o oficial."],
["rd","Perfil @cidadeemmovimento","10/04/2026","A prefeitura mente! Só tem uns 30 km de ciclovia, eu mesmo andei por tudo. Compartilha!","d","Relato pessoal, sem medição, sem fonte e sem autoria identificável."],
["rd","Blog Viaje Mais","21/01/2026","Top 10 cidades pedaláveis: Vila Nova do Sul tem mais de 120 km de ciclovias! (sem metodologia)","d","Número sem método nem fonte, muito diferente dos demais: descartar."]]},
{t:"O chá milagroso",lv:"Fácil",a:"f",
q:"Um estudo da Universidade Federal do Planalto provou que o chá de erva-doce cura a gripe em 24 horas.",
ctx:"A mensagem chegou em três grupos de família, com pedido de repasse.",
res:"A universidade negou o estudo e a instituição científica não encontra evidência de cura. Quem sustenta a afirmação são uma corrente e um site que vende chá.",
p:[["rd","Corrente de WhatsApp","sem data","URGENTE! Estudo da UFP PROVA que erva-doce cura gripe em 1 dia. Os médicos não querem que você saiba. Repasse!","d","Sem link, autor ou data, com urgência e apelo emocional: sinais típicos de corrente."],
["un","Universidade Federal do Planalto (nota oficial)","05/05/2025","A UFP não realizou nem publicou estudo sobre chá de erva-doce e gripe. A mensagem circula sem autorização e usa indevidamente o nome da universidade.","c","A instituição citada nega a autoria: contradiz diretamente a afirmação."],
["ci","Instituto Nacional de Pesquisa Clínica","18/06/2025","Não há evidência de que qualquer chá cure a gripe. O quadro costuma durar de 3 a 7 dias, e o tratamento é de suporte.","c","Fonte científica sem interesse comercial; a promessa de cura em 24 h não tem base."],
["rd","Blog Vida Natural Chás","12/05/2025","Estudo comprova: erva-doce cura gripe! Compre agora o kit com 10 caixas.","d","Quem vende o produto tem interesse, e o 'estudo' não é citado nem linkado."]]},
{t:"A escola que mais cresceu",lv:"Difícil",a:"i",
q:"A Escola Municipal Aurora foi a que mais cresceu em leitura em todo o estado entre 2023 e 2025.",
ctx:"A diretora repetiu a frase em entrevista. Será que dá para comprovar?",
res:"A Aurora lidera entre os dados já divulgados, mas 40% das escolas ficaram de fora. Sem a base completa, não dá para confirmar nem negar 'em todo o estado'.",
p:[["of","Secretaria Municipal de Educação","20/02/2026","Boletim 2025: a Escola Aurora subiu 18 pontos na prova de leitura, um dos maiores avanços da região Norte do estado.","i","Confirma o avanço, mas só fala da região Norte, não do estado inteiro."],
["bd","Painel de Avaliação Estadual","30/03/2026","Entre as escolas com dados divulgados (60% do total), a Aurora tem o maior avanço: +18 pontos. Os dados dos 40% restantes ainda não foram publicados.","a","Apoia, mas só entre as escolas já divulgadas: é prova parcial."],
["im","Jornal Correio do Norte","03/04/2026","Aurora é campeã de crescimento no estado, diz diretora. A reportagem não cita números nem documentos.","d","Repete a frase da diretora sem checar nenhum dado."],
["of","Secretaria Estadual de Educação","15/04/2026","Os resultados das escolas rurais e de ensino integral só serão divulgados em dezembro de 2026. Ainda não é possível comparar todas as escolas.","i","A informação que falta é justamente a que decidiria o caso."]]},
{t:"O desemprego pela metade",lv:"Médio",a:"f",
q:"O desemprego no país caiu pela metade em apenas um ano.",
ctx:"Um gráfico com essa manchete circula nas redes. Ele não mostra a fonte.",
res:"Em um ano a queda foi de 1,4 ponto percentual (cerca de 17%). O 'meio' vem de misturar períodos diferentes: um clássico dado fora de contexto.",
p:[["rd","Print de gráfico compartilhado","sem data","Desemprego: 12% → 6%. 'Caiu 50%!' (imagem cortada, sem fonte e sem datas no eixo)","d","Imagem cortada, sem fonte e sem datas: não dá para verificar."],
["bd","Instituto Nacional de Estatística, painel de desocupação","28/04/2026","Taxa de desocupação: 8,4% no 1º trimestre de 2025 e 7,0% no 1º trimestre de 2026.","c","Dado primário: a queda em um ano foi de 1,4 ponto percentual, cerca de 17%, e não 50%."],
["of","Ministério do Trabalho (nota técnica)","05/05/2026","A queda de 1,4 ponto percentual é a maior em quatro anos. Não é correto comparar com o pico de 12% de 2017 como se fosse variação de um ano.","c","Confirma o dado do instituto e alerta contra a comparação enganosa."],
["un","Núcleo de Economia, Universidade Estadual","12/05/2026","Do pico de 12% (2017) até 7,0% (2026) a taxa caiu cerca de 42%, mas ao longo de nove anos, não de um.","i","Explica de onde o número exagerado pode ter vindo, mas não sustenta 'em um ano'."]]},
{t:"Espelhos na montanha",lv:"Médio",a:"v",
q:"A vila de Serra Funda instalou espelhos gigantes na encosta para levar sol à praça central nos meses de inverno.",
ctx:"Soa como piada, e o post que trouxe a notícia tem cara de meme. Mas pode ser verdade.",
res:"Parece absurdo, mas fonte oficial, reportagem com provas e relatório científico concordam. O exagero do meme não invalida o fato.",
p:[["of","Prefeitura de Serra Funda","09/10/2019","Projeto Espelhos do Vale: três espelhos de 17 m² na encosta, movidos por computador, refletem a luz do sol sobre a praça central nos meses de inverno, quando o sol não alcança o fundo do vale.","a","Fonte primária, com data e detalhes técnicos."],
["im","Gazeta da Serra","11/10/2019","Reportagem com fotos da praça iluminada e entrevista com a engenheira responsável, que cita o relatório técnico do projeto.","a","Imprensa que traz provas próprias (fotos, entrevista) e cita o documento original."],
["ci","Instituto de Energia Solar","03/2020","Relatório de avaliação: os espelhos iluminam cerca de 600 m² da praça, e o sistema acompanha o sol por computador.","a","Instituição científica independente, que mediu o resultado."],
["rd","Página de memes Mundo Incrível","2024","Cidade usa espelhos para iluminar a CIDADE INTEIRA o ano todo!!!","d","Exagera (praça, não cidade; só no inverno) e não cita fonte: não serve de prova."]]}
];
var S=[],cur=0;
function reset(i){S[i]={m:{},v:"",j:"",r:null};}
C.forEach(function(c,i){reset(i);});
function el(t,c,x){var e=document.createElement(t);if(c){e.className=c;}if(x!=null){e.textContent=x;}return e;}
function score(i){
  var c=C[i],s=S[i],n=c.p.length,ok=0,ev=0,evn=0,cite={},w=(s.j.match(/\S+/g)||[]).length;
  c.p.forEach(function(p,j){var m=s.m[j];if(m&&(m==="d")===(p[4]==="d")){ok++;}if(p[4]!=="d"){evn++;if(m===p[4]){ev++;}}});
  (s.j.match(/\bP[1-4]\b/gi)||[]).forEach(function(x){cite[x.toUpperCase()]=1;});
  var r={pr:s.v===c.a?25:(s.v==="i"?8:0),fo:Math.round(ok/n*25),ev:Math.round(ev/evn*25),
    cl:Math.round(Math.min(w/35,1)*15+Math.min(Object.keys(cite).length,2)*5)};
  r.t=r.pr+r.fo+r.ev+r.cl;return r;
}
function submit(){
  var s=S[cur],miss=[],msg=[];
  C[cur].p.forEach(function(p,j){if(!s.m[j]){miss.push("P"+(j+1));}});
  if(miss.length){msg.push("classifique "+miss.join(", "));}
  if(!s.v){msg.push("escolha um veredito");}
  if(!s.j.trim()){msg.push("escreva a justificativa");}
  if(msg.length){$("st").textContent="Falta: "+msg.join("; ")+".";return;}
  s.r=score(cur);render();
  var rs=$("res");rs.scrollIntoView({block:"start"});rs.focus({preventScroll:true});
}
function radio(name,id,label,checked,lock,cls,fn){
  var o=el("span","opt"+(cls?" "+cls:"")),ip=el("input"),l=el("label",null,label);
  ip.type="radio";ip.name=name;ip.id=id;ip.checked=checked;ip.disabled=lock;ip.onchange=fn;l.htmlFor=id;
  o.appendChild(ip);o.appendChild(l);return o;
}
function view(){
  var c=C[cur],s=S[cur],lock=!!s.r,box=$("case");box.textContent="";
  var h=el("div","case-h");h.appendChild(el("span","chip","Caso "+(cur+1)+" · "+c.lv));h.appendChild(el("h3",null,c.t));box.appendChild(h);
  var q=el("blockquote","claim");q.appendChild(el("span","label","Afirmação em investigação"));q.appendChild(el("p",null,c.q));q.appendChild(el("p","ctx",c.ctx));box.appendChild(q);
  box.appendChild(el("h4","sub-h","Arquivo de pistas: leia e classifique cada uma"));
  var g=el("div","clues");
  c.p.forEach(function(p,j){
    var a=el("article","clue"),hd=el("header"),t=T[p[0]];
    hd.appendChild(el("b","pn","P"+(j+1)));hd.appendChild(el("span","tag "+(t[1]?"ver":"oth"),t[0]+(t[1]?" · verificada":"")));
    a.appendChild(hd);a.appendChild(el("p","meta",p[1]+" · "+p[2]));a.appendChild(el("p","txt",p[3]));
    var f=el("fieldset","seg"),row=el("div","seg-row");
    f.appendChild(el("legend","vh","Classifique a pista P"+(j+1)));f.appendChild(row);
    Object.keys(M).forEach(function(k){row.appendChild(radio("m"+j,"m"+j+k,M[k],s.m[j]===k,lock,"",function(){s.m[j]=k;}));});
    a.appendChild(f);
    if(lock){
      var ok=s.m[j]===p[4],w=el("p","why");a.className+=ok?" hit":" miss";
      w.appendChild(el("b",null,(ok?"Acertou: ":"Gabarito: ")+M[p[4]]+". "));w.appendChild(document.createTextNode(p[5]));a.appendChild(w);
    }
    g.appendChild(a);
  });
  box.appendChild(g);
  var pn=el("section","panel"),f2=el("fieldset","seg"),r2=el("div","seg-row");
  f2.appendChild(el("legend",null,"Seu veredito"));f2.appendChild(r2);
  [["v","ok"],["f","bad"],["i","warn"]].forEach(function(x){r2.appendChild(radio("vd","vd"+x[0],V[x[0]],s.v===x[0],lock,"v-"+x[1],function(){s.v=x[0];}));});
  pn.appendChild(f2);
  var fd=el("div","field"),lb=el("label",null,"Justificativa (cite as pistas, ex.: P1 e P2)"),ta=el("textarea");
  ta.id="just";lb.htmlFor="just";ta.value=s.j;ta.disabled=lock;ta.oninput=function(){s.j=ta.value;};
  fd.appendChild(lb);fd.appendChild(ta);pn.appendChild(fd);
  if(!lock){
    var bt=el("button","btn primary","Entregar veredito"),st=el("p","hint");
    bt.type="button";bt.onclick=submit;st.id="st";st.setAttribute("role","status");pn.appendChild(bt);pn.appendChild(st);
  }
  box.appendChild(pn);
  if(lock){
    var r=s.r,rp=el("section","panel result"),ul=el("ul","sc");
    rp.id="res";rp.tabIndex=-1;
    rp.appendChild(el("h4",null,(s.v===c.a?"Veredito correto: ":"Gabarito: ")+V[c.a]));
    rp.appendChild(el("p",null,c.res));
    [["Precisão",r.pr],["Fontes",r.fo],["Evidências",r.ev],["Clareza",r.cl]].forEach(function(x){ul.appendChild(el("li",null,x[0]+": "+x[1]+"/25"));});
    rp.appendChild(ul);rp.appendChild(el("p","tot","Total do caso: "+r.t+"/100"));
    var rb=el("button","btn sm","Refazer este caso");rb.type="button";rb.onclick=function(){reset(cur);render();};
    rp.appendChild(rb);box.appendChild(rp);
  }
}
function render(){
  var tabs=$("tabs"),done=0,tot=0;tabs.textContent="";
  C.forEach(function(c,i){
    var b=el("button","tab"+(i===cur?" on":""));b.type="button";b.setAttribute("aria-pressed",i===cur?"true":"false");
    b.appendChild(el("b",null,"Caso "+(i+1)));b.appendChild(el("span",null,S[i].r?"Resolvido · "+S[i].r.t+"/100":c.lv));
    b.onclick=function(){cur=i;render();};tabs.appendChild(b);
    if(S[i].r){done++;tot+=S[i].r.t;}
  });
  $("grand").textContent="Casos resolvidos: "+done+"/5 · Pontos: "+tot+"/500";
  view();
}
render();
})();
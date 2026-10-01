(function(){var f=new Intl.NumberFormat('pl-PL',{maximumFractionDigits:4});function n(x){return f.format(+x.toPrecision(12))}
var Z='Liczba, do której porównujesz, nie może być zerem.';
var C={of:function(a,b){return[n(a*b/100),n(a)+'% z '+n(b)+' = '+n(b)+' × '+n(a)+' ÷ 100']},
wp:function(a,b){return b?[n(a/b*100)+'%',n(a)+' ÷ '+n(b)+' × 100']:Z},
ch:function(a,b){if(!a)return'Wartość początkowa nie może być zerem.';var r=(b-a)/a*100;return[(r>0?'+':r<0?'−':'')+n(Math.abs(r))+'%',(r>0?'wzrost o ':r<0?'spadek o ':'bez zmiany ')+n(Math.abs(r))+'%']},
ad:function(a,b){return[n(a*(1+b/100)),n(a)+' × '+n(1+b/100)]},
sb:function(a,b){return[n(a*(1-b/100)),n(a)+' × '+n(1-b/100)]},
wh:function(a,b){return b?[n(a/b*100),n(a)+' ÷ '+n(b)+' × 100']:Z}};
var zl=new Intl.NumberFormat('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2});function z(x){return zl.format(+x.toPrecision(12))+'\u00a0zł'}
var R='Rabat musi mieścić się w zakresie 0–100%.',V='Stawka VAT nie może być ujemna.';
C.af=function(p,r){return r<0||r>100?R:[z(p*(1-r/100)),'oszczędzasz '+z(p*r/100)]};
C.bf=function(s,r){return r<0||r>=100?'Rabat musi być w zakresie od 0 do mniej niż 100%.':[z(s/(1-r/100)),'cena po rabacie ÷ '+n(1-r/100)]};
C.rt=function(b,a){if(!b)return'Cena przed rabatem nie może być zerem.';var r=(b-a)/b*100;return r>=0?[n(r)+'%','oszczędzasz '+z(b-a)]:[n(-r)+'%','to podwyżka ceny, nie rabat']};
C.dw=function(p,r,q){if(r<0||r>100||q<0||q>100)return R;var f=(1-r/100)*(1-q/100);return[z(p*f),'łączny rabat '+n((1-f)*100)+'%']};
C.nb=function(a,s){return s<0?V:[z(a*(1+s/100)),'VAT '+z(a*s/100)]};
C.bn=function(g,s){if(s<0)return V;var t=g/(1+s/100);return[z(t),'VAT '+z(g-t)]};
document.querySelectorAll('form[data-c]').forEach(function(F){var I=F.querySelectorAll('input'),O=F.querySelector('output'),E=F.querySelector('.ex');
function run(){var v=[].map.call(I,function(i){var s=i.value.replace(/\s/g,'').replace(',','.');return s&&/^-?\d*\.?\d+$/.test(s)?+s:NaN});
var r=v.some(function(x){return x!==x})?'Wpisz liczby, np. 12,5':C[F.dataset.c].apply(0,v);
if(typeof r=='string'){O.textContent='—';E.textContent=r}else{O.textContent=r[0];E.textContent=r[1]}}
F.addEventListener('input',run);F.addEventListener('submit',function(e){e.preventDefault()});run()})})();

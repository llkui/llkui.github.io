(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{SKKP:function(t,n,e){"use strict";e.d(n,"a",(function(){return I})),e.d(n,"b",(function(){return x}));var o=e("mrSG"),r=e("GU7r"),c=e("fXoL"),s=e("GR68"),a=e("2Suw"),i=e("/KA4"),l=e("XNiG"),b=e("IzEk"),u=e("JX91"),g=e("1G5W"),f=e("ofXK"),p=e("pdGh");const h=["contentElement"];function d(t,n){if(1&t&&c.Tb(0,"span",4),2&t){const t=c.kc();c.Fb("ant-badge-status-dot ant-badge-status-",t.nzStatus||t.presetColor,""),c.Ec("background",!t.presetColor&&t.nzColor,c.Lb),c.qc("ngStyle",t.nzStyle)}}function z(t,n){if(1&t&&(c.Yb(0,"span",5),c.Hc(1),c.Xb()),2&t){const t=c.kc();c.Cb(1),c.Ic(t.nzText)}}function m(t,n){if(1&t&&(c.Yb(0,"p",13),c.Hc(1),c.Xb()),2&t){const t=n.$implicit,e=c.kc(3).index,o=c.kc(3);c.Ib("current",t===o.countArray[e]),c.Cb(1),c.Jc(" ",t," ")}}function y(t,n){if(1&t&&(c.Wb(0),c.Fc(1,m,2,3,"p",12),c.Vb()),2&t){const t=c.kc(5);c.Cb(1),c.qc("ngForOf",t.countSingleArray)}}function O(t,n){if(1&t&&(c.Yb(0,"span",11),c.Fc(1,y,2,1,"ng-container",9),c.Xb()),2&t){const t=c.kc().index,n=c.kc(3);c.Ec("transform","translateY("+100*(0-n.countArray[t])+"%)"),c.Cb(1),c.qc("ngIf",!n.nzDot&&void 0!==n.countArray[t])}}function C(t,n){if(1&t&&(c.Wb(0),c.Fc(1,O,2,3,"span",10),c.Vb()),2&t){const t=c.kc(3);c.Cb(1),c.qc("ngIf",t.count<=t.nzOverflowCount)}}function S(t,n){if(1&t&&(c.Wb(0),c.Hc(1),c.Vb()),2&t){const t=c.kc(3);c.Cb(1),c.Jc("",t.nzOverflowCount,"+")}}function w(t,n){if(1&t&&(c.Yb(0,"sup",7),c.Fc(1,C,2,1,"ng-container",8),c.Fc(2,S,2,1,"ng-container",9),c.Xb()),2&t){const t=c.kc(2);c.Ec("right",t.nzOffset&&t.nzOffset[0]?0-t.nzOffset[0]:null,"px")("margin-top",t.nzOffset&&t.nzOffset[1]?t.nzOffset[1]:null,"px"),c.Ib("ant-badge-count",!t.nzDot)("ant-badge-dot",t.nzDot)("ant-badge-multiple-words",t.countArray.length>=2),c.qc("@.disabled",t.notWrapper)("@zoomBadgeMotion",void 0)("ngStyle",t.nzStyle),c.Db("title",null===t.nzTitle?"":t.nzTitle||t.nzCount),c.Cb(1),c.qc("ngForOf",t.maxNumberArray),c.Cb(1),c.qc("ngIf",t.count>t.nzOverflowCount)}}function v(t,n){if(1&t&&(c.Wb(0),c.Fc(1,w,3,16,"sup",6),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.qc("ngIf",t.showSup&&t.viewInit)}}const k=["*"],j=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let I=(()=>{class t{constructor(t,n,e,o,r,c){this.nzConfigService=t,this.renderer=n,this.elementRef=e,this.contentObserver=o,this.cdr=r,this.ngZone=c,this.destroy$=new l.a,this.notWrapper=!0,this.viewInit=!1,this.maxNumberArray=[],this.countArray=[],this.countSingleArray=[0,1,2,3,4,5,6,7,8,9],this.presetColor=null,this.count=0,this.nzShowZero=!1,this.nzShowDot=!0,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null}checkContent(){var t;this.notWrapper=Object(i.g)(null===(t=this.contentElement)||void 0===t?void 0:t.nativeElement),this.notWrapper?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-not-a-wrapper"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-not-a-wrapper")}get showSup(){return this.nzShowDot&&this.nzDot||this.count>0||0===this.count&&this.nzShowZero}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngAfterViewInit(){this.ngZone.onStable.pipe(Object(b.a)(1)).subscribe(()=>{this.viewInit=!0,this.cdr.detectChanges()}),this.contentObserver.observe(this.contentElement).pipe(Object(u.a)(!0),Object(g.a)(this.destroy$)).subscribe(()=>{this.checkContent()})}ngOnChanges(t){const{nzOverflowCount:n,nzCount:e,nzColor:o}=t;!e||e.currentValue instanceof c.L||(this.count=Math.max(0,e.currentValue),this.countArray=this.count.toString().split("").map(t=>+t)),n&&this.generateMaxNumberArray(),o&&(this.presetColor=this.nzColor&&-1!==j.indexOf(this.nzColor)?this.nzColor:null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(c.Sb(a.a),c.Sb(c.E),c.Sb(c.l),c.Sb(r.b),c.Sb(c.h),c.Sb(c.z))},t.\u0275cmp=c.Mb({type:t,selectors:[["nz-badge"]],viewQuery:function(t,n){var e;1&t&&c.Mc(h,!0),2&t&&c.xc(e=c.hc())&&(n.contentElement=e.first)},hostAttrs:[1,"ant-badge"],hostVars:2,hostBindings:function(t,n){2&t&&c.Ib("ant-badge-status",n.nzStatus)},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[c.Ab],ngContentSelectors:k,decls:6,vars:3,consts:[["contentElement",""],[3,"class","background","ngStyle",4,"ngIf"],["class","ant-badge-status-text",4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],["class","ant-scroll-number",3,"ngStyle","right","marginTop","ant-badge-count","ant-badge-dot","ant-badge-multiple-words",4,"ngIf"],[1,"ant-scroll-number",3,"ngStyle"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","ant-scroll-number-only",3,"transform",4,"ngIf"],[1,"ant-scroll-number-only"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(t,n){1&t&&(c.pc(),c.Yb(0,"span",null,0),c.oc(2),c.Xb(),c.Fc(3,d,1,6,"span",1),c.Fc(4,z,2,1,"span",2),c.Fc(5,v,2,1,"ng-container",3)),2&t&&(c.Cb(3),c.qc("ngIf",n.nzStatus||n.nzColor),c.Cb(1),c.qc("ngIf",n.nzStatus||n.nzColor),c.Cb(1),c.qc("nzStringTemplateOutlet",n.nzCount))},directives:[f.l,p.b,f.m,f.k],encapsulation:2,data:{animation:[s.g]},changeDetection:0}),Object(o.__decorate)([Object(i.a)(),Object(o.__metadata)("design:type",Boolean)],t.prototype,"nzShowZero",void 0),Object(o.__decorate)([Object(i.a)(),Object(o.__metadata)("design:type",Object)],t.prototype,"nzShowDot",void 0),Object(o.__decorate)([Object(i.a)(),Object(o.__metadata)("design:type",Object)],t.prototype,"nzDot",void 0),Object(o.__decorate)([Object(a.b)("backTop"),Object(o.__metadata)("design:type",Number)],t.prototype,"nzOverflowCount",void 0),Object(o.__decorate)([Object(a.b)("backTop"),Object(o.__metadata)("design:type",String)],t.prototype,"nzColor",void 0),t})(),x=(()=>{class t{}return t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(n){return new(n||t)},imports:[[f.c,r.c,p.a]]}),t})()}}]);
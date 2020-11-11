(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/shared/assets/styles-app.scss":
/*!**************************************************************!*\
  !*** /home/vsts/work/1/s/libs/shared/assets/styles-app.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-3!./styles-app.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/shared/assets/styles-app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/shared/assets/styles-app.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/vsts/work/1/s/node_modules/postcss-loader/src??embedded!/home/vsts/work/1/s/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-3!/home/vsts/work/1/s/libs/shared/assets/styles-app.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  font: inherit;\n  outline: none;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nhr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\nbody {\n  background-color: var(--body-bg, white);\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain,\nform legend {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nbutton,\ninput,\ntextarea,\nselect {\n  margin: 0;\n}\n.btn,\n.form-control,\n.link,\n.reset {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  color: inherit;\n  line-height: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\nselect.form-control::-ms-expand {\n  display: none;\n}\ntextarea {\n  resize: vertical;\n  overflow: auto;\n  vertical-align: top;\n}\ninput::-ms-clear {\n  display: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nimg,\nvideo,\nsvg {\n  max-width: 100%;\n}\n[type=reset],\n[type=submit],\nbutton,\nhtml [type=button] {\n  -webkit-appearance: button;\n}\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nhtml,\nbody,\n#root,\n#___gatsby {\n  width: 100%;\n  height: 100%;\n}\nhtml {\n  font-size: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\nbody {\n  font-size: 15px;\n}\n.app main {\n  padding: 36px;\n}\n.app p {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.app div[role=navigation] {\n  margin-bottom: 5px;\n}\n.app div[role=navigation] ul > li {\n  display: inline-block;\n}\n.app div[role=navigation] ul > li:not(:last-child) {\n  padding-right: 10px;\n  margin-right: 10px;\n  border-right: 1px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvbGlicy9zaGFyZWQvYXNzZXRzL3N0eWxlcy9fcmVzZXQuc2NzcyIsImxpYnMvc2hhcmVkL2Fzc2V0cy9zdHlsZXMtYXBwLnNjc3MiLCIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnMvc2hhcmVkL2Fzc2V0cy9zdHlsZXMvYmFzZS9taXhpbnMvX3Jlc2V0LnNjc3MiLCIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnMvc2hhcmVkL2Fzc2V0cy9zdHlsZXMvX2dsb2JhbC1lbGVtZW50cy5zY3NzIiwiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJzL3NoYXJlZC9hc3NldHMvc3R5bGVzL2Jhc2UvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJzL3NoYXJlZC9hc3NldHMvc3R5bGVzL19hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU9DLGFBQUE7RUFDQSxhQUFBO0FDTEQ7QURGQztFQUdDLG1CQUFBO0FDRUY7QURLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtGQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRDtBREtBO0VBQ0Msc0JBQUE7QUNGRDtBREtBO0VBQ0MsdUNBQUE7QUNGRDtBREtBOzs7Ozs7Ozs7Ozs7O0VBYUMsY0FBQTtBQ0ZEO0FES0E7O0VBRUMsZ0JBQUE7QUNGRDtBREtBOztFQUVDLFlBQUE7QUNGRDtBREtBOzs7O0VBSUMsU0FBQTtBQ0ZEO0FES0E7Ozs7RUV6SUMsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FEMklEO0FEREE7RUFDQyxhQUFBO0FDSUQ7QUREQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSUQ7QUREQTtFQUNDLGFBQUE7QUNJRDtBRERBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ0lEO0FEREE7OztFQUdDLGVBQUE7QUNJRDtBRENBOzs7O0VBSUMsMEJBQUE7QUNFRDtBRENBOzs7O0VBSUMsa0JBQUE7RUFDQSxVQUFBO0FDRUQ7QURDQTs7OztFQUlDLDhCQUFBO0FDRUQ7QURDQTs7RUFFQyxzQkFBQTtFQUNBLFVBQUE7QUNFRDtBRENBOztFQUVDLFlBQUE7QUNFRDtBRENBO0VBQ0MsNkJBQUE7RUFDQSxvQkFBQTtBQ0VEO0FEQ0E7O0VBRUMsd0JBQUE7QUNFRDtBRENBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUNFRDtBRENBO0VBQ0MsMEJBQUE7RUFDQSxhQUFBO0FDRUQ7QUVqT0E7Ozs7RUFJQyxXQUFBO0VBQ0EsWUFBQTtBRm9PRDtBRWpPQTtFQUNDLGVDTmdCO0VET2hCLDBKQ1ZhO0FIOE9kO0FFak9BO0VBQ0MsZUNWZ0I7QUg4T2pCO0FJalBDO0VBQ0MsYUFBQTtBSm9QRjtBSWpQQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUptUEY7QUloUEM7RUFDQyxrQkFBQTtBSmtQRjtBSWhQRTtFQUNDLHFCQUFBO0FKa1BIO0FJaFBHO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FKa1BKIiwiZmlsZSI6ImxpYnMvc2hhcmVkL2Fzc2V0cy9zdHlsZXMtYXBwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcblx0Jixcblx0JjpiZWZvcmUsXG5cdCY6YWZ0ZXIge1xuXHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdH1cblxuXHRmb250OiBpbmhlcml0O1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8sXG5ociB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xufVxuXG5odG1sIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcsIHdoaXRlKTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbm1haW4sXG5mb3JtIGxlZ2VuZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5vbCxcbnVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuXHRtYXJnaW46IDA7XG59XG5cbi5idG4sXG4uZm9ybS1jb250cm9sLFxuLmxpbmssXG4ucmVzZXQge1xuXHRAaW5jbHVkZSByZXNldDtcbn1cblxuc2VsZWN0LmZvcm0tY29udHJvbDo6LW1zLWV4cGFuZCB7XG5cdGRpc3BsYXk6IG5vbmU7IC8vIGhpZGUgU2VsZWN0IGRlZmF1bHQgaWNvbiBvbiBJRVxufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pbnB1dDo6LW1zLWNsZWFyIHtcblx0ZGlzcGxheTogbm9uZTsgLy8gaGlkZSBYIGljb24gaW4gSUUgYW5kIEVkZ2Vcbn1cblxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW1nLFxudmlkZW8sXG5zdmcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddLFxuYnV0dG9uLFxuaHRtbCBbdHlwZT0nYnV0dG9uJ10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIsXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuXHRib3JkZXItc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nLFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcblx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG5bdHlwZT0nY2hlY2tib3gnXSxcblt0eXBlPSdyYWRpbyddIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMDtcbn1cblxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG5bdHlwZT0nc2VhcmNoJ10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcblx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdG9wYWNpdHk6IDAuNTQ7XG59XG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcblx0Zm9udDogaW5oZXJpdDtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiIsIioge1xuICBmb250OiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lO1xufVxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8sXG5ociB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcsIHdoaXRlKTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbm1haW4sXG5mb3JtIGxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4sXG4uZm9ybS1jb250cm9sLFxuLmxpbmssXG4ucmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2w6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5pbnB1dDo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaW1nLFxudmlkZW8sXG5zdmcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0sXG5idXR0b24sXG5odG1sIFt0eXBlPWJ1dHRvbl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cblt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG5bdHlwZT1jaGVja2JveF0sXG5bdHlwZT1yYWRpb10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBvcGFjaXR5OiAwLjU0O1xufVxuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuI3Jvb3QsXG4jX19fZ2F0c2J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYXBwIG1haW4ge1xuICBwYWRkaW5nOiAzNnB4O1xufVxuLmFwcCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFwcCBkaXZbcm9sZT1uYXZpZ2F0aW9uXSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5hcHAgZGl2W3JvbGU9bmF2aWdhdGlvbl0gdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hcHAgZGl2W3JvbGU9bmF2aWdhdGlvbl0gdWwgPiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xufSIsIi8vIHJlc2V0IHVzZXIgYWdlbnQgc3R5bGVcbkBtaXhpbiByZXNldCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcblx0YXBwZWFyYW5jZTogbm9uZTtcbn1cbiIsImh0bWwsXG5ib2R5LFxuI3Jvb3QsXG4jX19fZ2F0c2J5IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuaHRtbCB7XG5cdGZvbnQtc2l6ZTogJGh0bWwtZm9udC1zaXplO1xuXHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xufVxuXG5ib2R5IHtcblx0Zm9udC1zaXplOiAkYm9keS1mb250LXNpemU7XG59XG4iLCIkZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG5cdEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcblxuJGh0bWwtZm9udC1zaXplOiAxMHB4O1xuJGJvZHktZm9udC1zaXplOiAxNXB4O1xuXG4kaGVhZGVyLWJnOiAkY29sb3ItZGFyay1ibHVlO1xuJGhlYWRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xuIiwiLmFwcCB7XG5cdG1haW4ge1xuXHRcdHBhZGRpbmc6IDM2cHg7XG5cdH1cblxuXHRwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdGRpdltyb2xlPSduYXZpZ2F0aW9uJ10ge1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblxuXHRcdHVsID4gbGkge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG5cdFx0XHQmOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjb2xvci1ibGFjaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/vsts/work/1/s/node_modules/postcss-loader/src??embedded!/home/vsts/work/1/s/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-3!./styles.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvYXBwcy9mcm9udGVuZC1hcHAtMi9zcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUEiLCJmaWxlIjoiYXBwcy9mcm9udGVuZC1hcHAtMi9zcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************!*\
  !*** /home/vsts/work/1/s/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-3!./styles.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!**********************************************************************************!*\
  !*** multi /home/vsts/work/1/s/libs/shared/assets/styles-app.scss ./styles.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vsts/work/1/s/libs/shared/assets/styles-app.scss */"../../../libs/shared/assets/styles-app.scss");
module.exports = __webpack_require__(/*! /home/vsts/work/1/s/apps/frontend-app-2/src/styles.scss */"./styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
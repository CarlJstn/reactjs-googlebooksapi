(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/spinner.2f212d1f.gif"},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),r=n.n(o),c=(n(16),n(1)),l=n(2),i=n(4),u=n(3),m=n(5),h=n(8),p=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book,t="No author found",n="Price not available",a="#",o=s.a.createElement("img",{className:"thumbnail",src:"http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698120.png",alt:e.volumeInfo.title+"_thumbnail"});try{o=s.a.createElement("img",{className:"thumbnail",src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title+"_thumbnail"}),t=e.volumeInfo.authors[0],n=e.saleInfo.retailPrice.currencyCode+" "+e.saleInfo.retailPrice.amount,a=e.volumeInfo.previewLink}catch(c){}var r=s.a.createElement("div",{className:"book"},s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"bookItem"},o),s.a.createElement("b",{className:"bookTitle"},e.volumeInfo.title.substr(0,40)+"..."),s.a.createElement("p",{className:"author"},t),s.a.createElement("p",{className:"price"},n));return s.a.createElement("div",{className:"books"},r)}}]),t}(a.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.result.items.map(function(e,t){return s.a.createElement(p,{key:t,book:e})})}}]),t}(a.Component),f=n(9),v=n.n(f);function d(){return s.a.createElement("div",null,s.a.createElement("img",{src:v.a,style:{width:"60px",margin:"10% auto",display:"block"},alt:"Loading..."}))}n(18);var x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"btnContainer"},s.a.createElement("button",{className:"nextBtn",type:"button",onClick:this.props.onNext,style:{float:"right",cursor:"pointer"},disabled:this.props.disbaleNext},"Next"),s.a.createElement("button",{className:"prevBtn",type:"button",onClick:this.props.onPrevious,style:{float:"right",cursor:"pointer"},disabled:this.props.disablePrev},"Previous"))}}]),t}(a.Component),g=(n(19),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={searchText:"Harry Potter",resultIndex:0,result:null},n.onChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){""===n.state.searchText?alert("Please type something."):(n.setState({result:null}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n.state.searchText,"&startIndex=").concat(n.state.resultIndex,"&maxResults=40")).then(function(e){return e.json()}).then(function(e){n.setState({result:e,resultIndex:0})}))},n.onNext=function(e){var t=n.state.resultIndex+40;t>n.state.result.totalItems&&(t=n.state.result.totalItems-40);try{n.setState({resultIndex:t,result:null},function(){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n.state.searchText,"&startIndex=").concat(n.state.resultIndex,"&maxResults=40")).then(function(e){return e.json()}).then(function(e){n.setState({result:e})})})}catch(a){}},n.onPrevious=function(e){var t=n.state.resultIndex-40;t<0&&(t=0),n.setState({resultIndex:t,result:null},function(){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(n.state.searchText,"&startIndex=").concat(n.state.resultIndex,"&maxResults=40")).then(function(e){return e.json()}).then(function(e){n.setState({result:e})})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.searchText,"&startIndex=").concat(this.state.resultIndex,"&maxResults=40")).then(function(e){return e.json()}).then(function(t){e.setState({result:t})})}},{key:"render",value:function(){var e,t=s.a.createElement(d,null),n=!0,a=!0;return null!==this.state.result&&(e=s.a.createElement(b,{result:this.state.result}),t=!1,n=!1,a=!1,this.state.result.items.length<40&&(n=!0)),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"search"},s.a.createElement("input",{className:"searchbox",type:"text",placeholder:"Search books...",name:"searchText",value:this.state.searchText,onChange:this.onChange}),s.a.createElement("button",{className:"searchbutton",onClick:this.onSubmit},"Search"))),t,s.a.createElement("div",{className:"mainBooks"},e),s.a.createElement(x,{disablePrev:a,disbaleNext:n,onPrevious:this.onPrevious,onNext:this.onNext}))}}]),t}(a.Component)),k=(n(20),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null),s.a.createElement("footer",{className:"footer"},"Google Books API \xa9"))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.8a6d5a6e.chunk.js.map
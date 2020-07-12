(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{434:function(t,a,s){t.exports=s.p+"assets/img/radarChart_final.3b1a0c72.png"},474:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"radar-chart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#radar-chart"}},[t._v("#")]),t._v(" Radar chart")]),t._v(" "),n("p",[t._v("Il existe plusieurs méthodes pour représenter l'information, des chiffres, des tableaux, des diagrammes.")]),t._v(" "),n("p",[t._v("Une forme de diagramme qui est souvent peu utilisé est le "),n("abbr",{attrs:{title:"Aussi connu sous le nom «diagramme en radar»"}},[t._v("diagramme de Kiviat")]),t._v(", qui représente sous la forme de pointe de tarte différentes informations.")]),t._v(" "),n("p",[t._v("Dans cet article, je décrirai les méthodes pour réaliser un graphiques tels que celui-ci.")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"radar","data-src":s(434),loading:"lazy"}})]),t._v(" "),n("p",[t._v("Le graphique est fait en utilisant la librairie "),n("a",{attrs:{href:"https://matplotlib.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("matplotlib"),n("OutboundLink")],1),t._v(", qui permets la visualisation de graphiques à l'aide de Python.")]),t._v(" "),n("p",[t._v("Pour les données, prennons ce tableau représentant la préférence de 9 fruits de 3 différentes personnes.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th"),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("Luci")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("Scott")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("Mark")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Pomme")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.85")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("Orange")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3.4")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.5")])]),t._v(" "),n("tr",[n("td",[t._v("Banane")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("1.8")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("1.6")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("Kiwi")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3.8")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("Mandarine")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.8")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2.6")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2.5")])]),t._v(" "),n("tr",[n("td",[t._v("Melon")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3.8")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("Poire")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("1.7")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2.5")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4")])]),t._v(" "),n("tr",[n("td",[t._v("Fraise")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3.5")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("Framboise")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("4.9")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("3.8")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("5")])])])]),t._v(" "),n("p",[t._v("Pour garder les données en mémoire, l'un des formats recommandé est l'utilisation de dataframe, un élément de la librairie "),n("a",{attrs:{href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pandas"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" math "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pi\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mise en place des données")]),t._v("\ndf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'groupe'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Luci'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Scott'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mark'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pomme'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.85")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Orange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Banane'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kiwi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ananas'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Melon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Poire'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fraise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Datte'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("En effectuant un "),n("code",[t._v("print(df)")]),t._v(", nous avons le résultat des données en mémoire.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  groupe  Pomme  Orange  Banane  Kiwi  Ananas  Melon  Poire  Fraise  Datte\n0   Luci   4.50     4.5     1.8   3.8     4.8    4.0    1.7     2.0    4.9\n1  Scott   4.85     3.4     1.6   4.0     2.6    3.8    2.5     3.5    3.8\n2   Mark   2.00     5.0     2.0   3.0     2.5    3.0    4.0     3.0    5.0\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Section en progression")]),t._v(" "),n("p",[t._v("Article en cours d'écriture.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
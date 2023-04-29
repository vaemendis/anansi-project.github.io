"use strict";(self.webpackChunkanansi_website=self.webpackChunkanansi_website||[]).push([[615],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=(a(7294),a(3905));const i=[{value:"Title",id:"title",level:3},{value:"Series",id:"series",level:3},{value:"Number",id:"number",level:3},{value:"Count",id:"count",level:3},{value:"Volume",id:"volume",level:3},{value:"AlternateSeries / AlternateNumber / AlternateCount",id:"alternateseries--alternatenumber--alternatecount",level:3},{value:"Summary",id:"summary",level:3},{value:"Notes",id:"notes",level:3},{value:"Year / Month / Day",id:"year--month--day",level:3},{value:"Creator fields",id:"creator-fields",level:3},{value:"Writer",id:"writer",level:4},{value:"Penciller",id:"penciller",level:4},{value:"Inker",id:"inker",level:4},{value:"Colorist",id:"colorist",level:4},{value:"Letterer",id:"letterer",level:4},{value:"CoverArtist",id:"coverartist",level:4},{value:"Editor",id:"editor",level:4},{value:"Translator",id:"translator",level:4},{value:"Publisher",id:"publisher",level:3},{value:"Imprint",id:"imprint",level:3},{value:"Genre",id:"genre",level:3},{value:"Tags",id:"tags",level:3},{value:"Web",id:"web",level:3},{value:"PageCount",id:"pagecount",level:3},{value:"LanguageISO",id:"languageiso",level:3},{value:"Format",id:"format",level:3},{value:"BlackAndWhite",id:"blackandwhite",level:3},{value:"Manga",id:"manga",level:3},{value:"Characters",id:"characters",level:3},{value:"Teams",id:"teams",level:3},{value:"Locations",id:"locations",level:3},{value:"MainCharacterOrTeam",id:"maincharacterorteam",level:3},{value:"ScanInformation",id:"scaninformation",level:3},{value:"StoryArc",id:"storyarc",level:3},{value:"StoryArcNumber",id:"storyarcnumber",level:3},{value:"SeriesGroup",id:"seriesgroup",level:3},{value:"AgeRating",id:"agerating",level:3},{value:"CommunityRating",id:"communityrating",level:3},{value:"Review",id:"review",level:3},{value:"GTIN",id:"gtin",level:3},{value:"Pages / ComicPageInfo",id:"pages--comicpageinfo",level:3},{value:"Image",id:"image",level:4},{value:"Type",id:"type",level:4},{value:"DoublePage",id:"doublepage",level:4},{value:"ImageSize",id:"imagesize",level:4},{value:"Key",id:"key",level:4},{value:"Bookmark",id:"bookmark",level:4},{value:"ImageWidth / ImageHeight",id:"imagewidth--imageheight",level:4}],o={toc:i},l="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schema-documentation"},"Schema documentation"),(0,r.kt)("p",null,"This page aims at clarifying the various elements of the schema, as well as their intended use and observed usage."),(0,r.kt)("h3",{id:"title"},"Title"),(0,r.kt)("p",null,"Title of the book."),(0,r.kt)("h3",{id:"series"},"Series"),(0,r.kt)("p",null,"Title of the series the book is part of."),(0,r.kt)("h3",{id:"number"},"Number"),(0,r.kt)("p",null,"Number of the book in the series."),(0,r.kt)("h3",{id:"count"},"Count"),(0,r.kt)("p",null,"The total number of books in the series."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," could be different on each book in a series. Consuming applications should consider using only the value for the latest book in the series."),(0,r.kt)("h3",{id:"volume"},"Volume"),(0,r.kt)("p",null,"Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple volumes. Volumes can be referenced by numer (1, 2, 3\u2026) or by year (2018, 2020\u2026)."),(0,r.kt)("h3",{id:"alternateseries--alternatenumber--alternatecount"},"AlternateSeries / AlternateNumber / AlternateCount"),(0,r.kt)("p",null,"Quite specific to US comics, some books can be part of cross-over story arcs. Those fields can be used to specify an alternate series, its number and count of books."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A description or summary of the book."),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("p",null,"A free text field, usually used to store information about the application that created the ",(0,r.kt)("inlineCode",{parentName:"p"},"ComicInfo.xml")," file."),(0,r.kt)("h3",{id:"year--month--day"},"Year / Month / Day"),(0,r.kt)("p",null,"Usually contains the release date of the book."),(0,r.kt)("h3",{id:"creator-fields"},"Creator fields"),(0,r.kt)("p",null,"According to the schema, each creator element can only be present once. In order to cater for multiple creator with the same role, it is accepted that values are comma separated."),(0,r.kt)("h4",{id:"writer"},"Writer"),(0,r.kt)("p",null,"Person or organization responsible for creating the scenario."),(0,r.kt)("h4",{id:"penciller"},"Penciller"),(0,r.kt)("p",null,"Person or organization responsible for drawing the art."),(0,r.kt)("h4",{id:"inker"},"Inker"),(0,r.kt)("p",null,"Person or organization responsible for inking the pencil art."),(0,r.kt)("h4",{id:"colorist"},"Colorist"),(0,r.kt)("p",null,"Person or organization responsible for applying color to drawings."),(0,r.kt)("h4",{id:"letterer"},"Letterer"),(0,r.kt)("p",null,"Person or organization responsible for drawing text and speech bubbles."),(0,r.kt)("h4",{id:"coverartist"},"CoverArtist"),(0,r.kt)("p",null,"Person or organization responsible for drawing the cover art."),(0,r.kt)("h4",{id:"editor"},"Editor"),(0,r.kt)("p",null,"A person or organization contributing to a resource by revising or elucidating the content, e.g., adding an introduction, notes, or other critical matter. An editor may also prepare a resource for production, publication, or distribution."),(0,r.kt)("h4",{id:"translator"},"Translator"),(0,r.kt)("p",null,"A person or organization who renders a text from one language into another, or from an older form of a language into the modern form."),(0,r.kt)("p",null,'This can also be used for fan translations ("scanlator"). '),(0,r.kt)("h3",{id:"publisher"},"Publisher"),(0,r.kt)("p",null,"A person or organization responsible for publishing, releasing, or issuing a resource."),(0,r.kt)("h3",{id:"imprint"},"Imprint"),(0,r.kt)("p",null,"An imprint is a group of publications under the umbrella of a larger imprint or a Publisher. For example, Vertigo is an Imprint of DC Comics."),(0,r.kt)("h3",{id:"genre"},"Genre"),(0,r.kt)("p",null,"Genre of the book or series. For example, ",(0,r.kt)("em",{parentName:"p"},"Science-Fiction")," or ",(0,r.kt)("em",{parentName:"p"},"Shonen"),"."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"tags"},"Tags"),(0,r.kt)("p",null,"Tags of the book or series. For example, ",(0,r.kt)("em",{parentName:"p"},"ninja")," or ",(0,r.kt)("em",{parentName:"p"},"school life"),"."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"web"},"Web"),(0,r.kt)("p",null,"A URL pointing to a reference website for the book."),(0,r.kt)("h3",{id:"pagecount"},"PageCount"),(0,r.kt)("p",null,"The number of pages in the book."),(0,r.kt)("h3",{id:"languageiso"},"LanguageISO"),(0,r.kt)("p",null,"A language code describing the language of the book."),(0,r.kt)("p",null,"Without any information on what kind of code this element is supposed to contain, it is recommended to use the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IETF_language_tag"},"IETF BCP 47 language tag"),", which can describe the language but also the script used. This helps to differentiate languages with multiple scripts, like Traditional and Simplified Chinese."),(0,r.kt)("h3",{id:"format"},"Format"),(0,r.kt)("p",null,"The original publication's binding format for scanned physical books or presentation format for digital sources."),(0,r.kt)("p",null,'"TBP", "HC", "Web", "Digital" are common designators.'),(0,r.kt)("h3",{id:"blackandwhite"},"BlackAndWhite"),(0,r.kt)("p",null,"Whether the book is in black and white."),(0,r.kt)("h3",{id:"manga"},"Manga"),(0,r.kt)("p",null,"Whether the book is a manga. This also defines the reading direction as right-to-left when set to ",(0,r.kt)("inlineCode",{parentName:"p"},"YesAndRightToLeft"),"."),(0,r.kt)("h3",{id:"characters"},"Characters"),(0,r.kt)("p",null,"Characters present in the book."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"teams"},"Teams"),(0,r.kt)("p",null,"Teams present in the book. Usually refer to super-hero teams (e.g. Avengers)."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"locations"},"Locations"),(0,r.kt)("p",null,"Locations mentioned in the book."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"maincharacterorteam"},"MainCharacterOrTeam"),(0,r.kt)("p",null,"Main character or team mentioned in the book."),(0,r.kt)("p",null,"It is accepted that a single value should be present."),(0,r.kt)("h3",{id:"scaninformation"},"ScanInformation"),(0,r.kt)("p",null,"A free text field, usually used to store information about who scanned the book."),(0,r.kt)("h3",{id:"storyarc"},"StoryArc"),(0,r.kt)("p",null,"The story arc that books belong to."),(0,r.kt)("p",null,"For example, for ",(0,r.kt)("a",{parentName:"p",href:"https://comicvine.gamespot.com/undiscovered-country/4050-122630/"},"Undiscovered Country"),", issues 1-6 are part of the ",(0,r.kt)("em",{parentName:"p"},"Destiny")," story arc, issues 7-12 are part of the ",(0,r.kt)("em",{parentName:"p"},"Unity")," story arc."),(0,r.kt)("h3",{id:"storyarcnumber"},"StoryArcNumber"),(0,r.kt)("p",null," While ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArc")," was originally designed to store the arc ",(0,r.kt)("em",{parentName:"p"},"within a series"),", it was often used to indicate that a book was part of a reading order, composed of books from multiple series. Mylar for instance was using the field as such."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArc")," itself wasn't able to carry the information about ordering of books within a reading order, ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArcNumber")," was added."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StoryArc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArcNumber")," can work in combination, to indicate in which position the book is located at for a specific reading order."),(0,r.kt)("p",null,"It is accepted that multiple values can be specified for both ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StoryArcNumber"),". Multiple values are comma separated."),(0,r.kt)("h3",{id:"seriesgroup"},"SeriesGroup"),(0,r.kt)("p",null,"A group or collection the series belongs to."),(0,r.kt)("p",null,"It is accepted that multiple values are comma separated."),(0,r.kt)("h3",{id:"agerating"},"AgeRating"),(0,r.kt)("p",null,"Age rating of the book."),(0,r.kt)("h3",{id:"communityrating"},"CommunityRating"),(0,r.kt)("p",null,"Community rating of the book, from ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"5.0"),"."),(0,r.kt)("h3",{id:"review"},"Review"),(0,r.kt)("p",null,"Review of the book."),(0,r.kt)("h3",{id:"gtin"},"GTIN"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Global_Trade_Item_Number"},"Global Trade Item Number")," identifying the book. GTIN incorporates other standards like ISBN, ISSN, EAN, or JAN."),(0,r.kt)("h3",{id:"pages--comicpageinfo"},"Pages / ComicPageInfo"),(0,r.kt)("p",null,"Describes each page of the book."),(0,r.kt)("h4",{id:"image"},"Image"),(0,r.kt)("p",null,"Page number."),(0,r.kt)("h4",{id:"type"},"Type"),(0,r.kt)("p",null,"Type of the page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FrontCover"),(0,r.kt)("li",{parentName:"ul"},"InnerCover: sometimes found inside the book as a second cover"),(0,r.kt)("li",{parentName:"ul"},"Roundup: summary of previous issues"),(0,r.kt)("li",{parentName:"ul"},"Story"),(0,r.kt)("li",{parentName:"ul"},"Advertisement"),(0,r.kt)("li",{parentName:"ul"},"Editorial"),(0,r.kt)("li",{parentName:"ul"},"Letters: fan letters"),(0,r.kt)("li",{parentName:"ul"},"Preview: sneak preview of the next book, or another comic"),(0,r.kt)("li",{parentName:"ul"},"BackCover"),(0,r.kt)("li",{parentName:"ul"},"Other: for anything not covered above"),(0,r.kt)("li",{parentName:"ul"},"Delete: indicate that the page should not be shown by readers")),(0,r.kt)("h4",{id:"doublepage"},"DoublePage"),(0,r.kt)("p",null,"Whether the page is a double spread."),(0,r.kt)("h4",{id:"imagesize"},"ImageSize"),(0,r.kt)("p",null,"File size of the image, supposedly in bytes."),(0,r.kt)("h4",{id:"key"},"Key"),(0,r.kt)("p",null,"???"),(0,r.kt)("h4",{id:"bookmark"},"Bookmark"),(0,r.kt)("p",null,"ComicRack uses this field when adding a bookmark in a book."),(0,r.kt)("h4",{id:"imagewidth--imageheight"},"ImageWidth / ImageHeight"),(0,r.kt)("p",null,"Width and height of the image in pixels."))}s.isMDXComponent=!0;const u={sidebar_position:2,sidebar_label:"Schema documentation",hide_title:!0},c=void 0,p={unversionedId:"comicinfo/documentation",id:"comicinfo/documentation",title:"documentation",description:"",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/comicinfo/documentation.md",sourceDirName:"comicinfo",slug:"/comicinfo/documentation",permalink:"/fr/docs/comicinfo/documentation",draft:!1,editUrl:"https://crowdin.com/project/anansi-project/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Schema documentation",hide_title:!0},sidebar:"sidebar",previous:{title:"ComicRack's ComicInfo.xml",permalink:"/fr/docs/comicinfo/intro"},next:{title:"Schemas",permalink:"/fr/docs/category/schemas"}},d={},m=i,h={toc:m},k="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"Changelog"}))}g.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{703:function(e,t,r){"use strict";r.r(t);var a=r(10),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("当你尝试直接从 React 中的功能组件的主体中获取数据时会发生的情况 👇")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-1.gif",alt:"initial"}})]),e._v(" "),r("p",[e._v("为什么会发生这种情况，React 提供了哪些工具来解决这个问题？")]),e._v(" "),r("h2",{attrs:{id:"副作用-side-effects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#副作用-side-effects"}},[e._v("#")]),e._v(" 副作用 Side Effects")]),e._v(" "),r("p",[e._v("如果你的 React 组件影响了它自身之外的任何东西，那么它就被称为副作用。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/side-effect-3.png",alt:"React 中的副作用示例"}})]),e._v(" "),r("p",[e._v("然而在组件渲染期间不应该发生副作用，因此它们不属于功能组件的主体，\n所以 React 为他们提供了一个特殊的位置。")]),e._v(" "),r("blockquote",[r("p",[e._v("要了解更多关于副作用以及它们为什么需要特殊处理的信息，请查看新的 React 文档 - "),r("a",{attrs:{href:"https://beta.reactjs.org/learn/keeping-components-pure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keeping Components Pure"),r("OutboundLink")],1),e._v("中的精彩部分。")])]),e._v(" "),r("h2",{attrs:{id:"处理副作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#处理副作用"}},[e._v("#")]),e._v(" 处理副作用")]),e._v(" "),r("p",[e._v("副作用的特殊位置在"),r("code",[e._v("useEffect")]),e._v("钩子内部，而 useEffect 的名称就是由此来的。")]),e._v(" "),r("blockquote",[r("p",[e._v("通过使用这个 Hook，告诉 React 你的组件需要在渲染之后做一些事情。React 会记住您传递的函数（我们将其称为“effect(效果)”），并在执行 DOM 更新后调用它。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://reactjs.org/docs/hooks-effect.html#example-using-hooks",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Docs - Using the Effect Hook"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("code",[e._v("useEffect")]),e._v("在渲染期间不会运行, 它会在渲染之后运行。但是现在仍然有同样的问题，因为在默认情况下，"),r("code",[e._v("useEffect")]),e._v("将在每个组件渲染后运行。")]),e._v(" "),r("p",[e._v("让我们尝试一下我们的初始组件：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-1.gif",alt:"video1"}})]),e._v(" "),r("h2",{attrs:{id:"有条件地运行-effect-效果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有条件地运行-effect-效果"}},[e._v("#")]),e._v(" 有条件地运行 Effect(效果)")]),e._v(" "),r("p",[e._v("有一种方法可以让 Effect 不在每次渲染之后执行，而是有条件的执行。"),r("code",[e._v("useEffect")]),e._v("钩子接受依赖列表作为第二个参数，只有列表中的任何依赖项发生更改，React 才会重新运行效果。让我们试一试：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-2.gif",alt:"video1"}})]),e._v(" "),r("p",[e._v("当你传递一个空数组作为依赖列表时，效果只会在第一次渲染后运行一次。它可以防止在我们的案例中发生无限循环。但是，你可能会注意到我们的 fetch 函数依赖于"),r("code",[e._v("props.id")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"对变化作出反应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对变化作出反应"}},[e._v("#")]),e._v(" 对变化作出反应")]),e._v(" "),r("p",[e._v("让我们从上次停下来的地方继续，看看当我们改变组件的 props 时会发生什么。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/props-1.gif",alt:"props-1"}})]),e._v(" "),r("p",[e._v("我们希望组件对 prop 更改做出反应并获取另一个 product，但现在的情况是没有任何反应，这是因为我们传入的是一个空的依赖列表。")]),e._v(" "),r("p",[e._v("如果副作用依赖于任何 props 或 state，我们应该将它们放在依赖列表中。每次渲染后，React 都会检查是否有任何依赖项发生了变化，如果发生了，将重新运行效果。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status//props-2.gif",alt:"props-2"}})]),e._v(" "),r("hr"),e._v(" "),r("blockquote",[r("ul",[r("li",[e._v("译文出自："),r("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("weekly-tracker"),r("OutboundLink")],1),e._v(" 项目，期待你的加入！")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://alexsidorenko.com/blog/useeffect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看原文"),r("OutboundLink")],1),e._v("对比阅读")]),e._v(" "),r("li",[e._v("发现错误？"),r("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/react_status/271/A_Visual_Guide_to_useEffect.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("提交 PR"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("译者："),r("a",{attrs:{href:"https://github.com/LilyChenlin",target:"_blank",rel:"noopener noreferrer"}},[e._v("LilyChenlin"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("校对者："),r("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[e._v("daodaolee"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
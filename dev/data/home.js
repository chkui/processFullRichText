export const _List = [{
    key:1,
    time: '2018-3-28',
    categoryCode: 'React',
    categoryName: 'React',
    title: 'React新特性——Protals与Error Boundaries',
    des: '在React 16.x 新增了一个名为“Protals”的特性，直接按照字面意思翻译实在不靠谱。在描述这个特性时，我们还是用官方的英文单词来指定它。Portals的作用简单的说就是为了便于开发“弹窗”、“对话框”、“浮动卡片”、“提示窗”等脱离标准文档流的组件而设定的，用于替换之前的unstable_renderSubtreeIntoContainer。',
    url: '/article/123456'
},{
    key:2,
    time: '2018-3-28',
    categoryCode: 'Jvm',
    categoryName: 'Jvm',
    title: 'Jvm与字节码——方法区与常量池',
    des: '首先要明确，JVM规范中并没有常量池这一说法，都是各种不同的jvm实现为了便于处理加以区分的。在JVM规范中统一称呼为方法区（JDK7之后这样说也不准确，有些数据常量数据又迁移到堆中）。下面的常量池主要以Java8自带的HotSpot为例，其他版本的Jvm会有各种区别。在HotSpot中，JDK6之前的版本所有常量池都在永生代（permanent generation）中，而JDK8取消了永生带用元空间（metaspace）替换，可以简单的理解常量池被移动到元空间中了（但实际处理还是有很多差异，大部分以前放置在永生代数据被迁移到堆中，而元数据区仅存放引用。但是这样说便于理解）。JDK7是一个过渡版本，只是将字符串移动到堆中。',
    url: '#'
},{
    key:3,
    time: '2018-3-28',
    categoryCode: 'React',
    categoryName: 'React',
    title: 'React新特性——Protals与Error Boundaries',
    des: '在React 16.x 新增了一个名为“Protals”的特性，直接按照字面意思翻译实在不靠谱。在描述这个特性时，我们还是用官方的英文单词来指定它。Portals的作用简单的说就是为了便于开发“弹窗”、“对话框”、“浮动卡片”、“提示窗”等脱离标准文档流的组件而设定的，用于替换之前的unstable_renderSubtreeIntoContainer。',
    url: '#'
},{
    key:4,
    time: '2018-3-28',
    categoryCode: 'React',
    categoryName: 'React',
    title: 'React新特性——Protals与Error Boundaries',
    des: '在React 16.x 新增了一个名为“Protals”的特性，直接按照字面意思翻译实在不靠谱。在描述这个特性时，我们还是用官方的英文单词来指定它。Portals的作用简单的说就是为了便于开发“弹窗”、“对话框”、“浮动卡片”、“提示窗”等脱离标准文档流的组件而设定的，用于替换之前的unstable_renderSubtreeIntoContainer。',
    url: '#'
}]
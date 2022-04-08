---
SEO_title: 友链
date: 2020-11-17 16:40:54
layout: friends
---
<center>
<span class="p large red">我</span>
<span class="p large yellow">的</span>
<span class="p large green">好</span>
<span class="p large blue">友</span>
</center>

{% issues sites | api=https://gitee.com/api/v5/repos/qikaile/links/issues?sort=created&direction=asc&labels=active&state=open&page=1&per_page=100 | group=group:技术大佬,朋友们 %}

{% issues sites | api=https://api.github.com/repos/qikaile/links/issues?sort=updated&state=open&page=1&per_page=100&labels=active | group=group:技术大佬,朋友们 %}

<hr>

{% timeline 如何申请本站友情链接 %}

{% timenode 第一步：将本站链接添加至贵站 %}

> 名称：云生博客
>
> 链接：https://qikaile.tk
>
> 头像：https://npm.elemecdn.com/boke-cdn/img/-1427d877db8c4c5c.jpg
>
> 网站截图：https://npm.elemecdn.com/boke-cdn/img/qikaile.tk.2r3uxmfxif20.jpg
>
> 描述：心静思远，志行千里。

站点截图建议自己提供，尺寸尽量不要大于 300*300。
未提供站点预览图的，本站会根据贵站链接调用以下 API 自动获取贵站的站点截图。
对于做了反扒措施的站点，API 获取的将是反扒页面，望知悉。
```
https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://<你的域名>/
```

{% endtimenode %}

{% timenode 第二步：前往[Gitee Issue](https://gitee.com/qikaile/links/issues) 或 [GitHub Issue](https://github.com/qikaile/links/issues) （←点我）按照格式填写并提交 %}

```
{    "title": "",    "avatar": "",    "screenshot": "",    "url": "",    "description": "",    "group": "朋友们"}
```

{% endtimenode %}

{% timenode 第三步：评论区留言，待博主审核。 %}

评论区记得填写正确的邮箱，博主微信会收到回复。

{% endtimenode %}
{% endtimeline %}


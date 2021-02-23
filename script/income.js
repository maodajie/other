layui.define(['jquery'], function(exports) {
	var $ = layui.jquery;
	var mojia = {
		'init': function() {
			var html = '<table class="layui-table" style="margin-top:0"><tbody>';
			$.each(mojia.info, function(nums, info) {
				html += '<tr>';
				if (info.type == 'pic') {
					html += '<td colspan="3" style="padding:0">';
					html += '<a target="_blank" href="' + info.link + '" title="' + info.tips + '">';
					html += '<img src="' + info.pics + '" alt="' + info.name + '" style="max-width:100%;width:100%;" />';
					html += '</a></td>';
				} else {
					html += '<td><a target="_blank" href="' + info.link1 + '" title="' + info.tips1 + '">' + info.name1 + '</a></td>';
					html += '<td><a target="_blank" href="' + info.link2 + '" title="' + info.tips2 + '">' + info.name2 + '</a></td>';
					html += '<td><a target="_blank" href="' + info.link3 + '" title="' + info.tips3 + '">' + info.name3 + '</a></td>';
				}
				html += '</tr>';
			});
			html += '</tbody></table>';
			$('.ts-admin-table').before(html);
		},
		'info': [{
			'name': '米上云香港GIA VPS20元起',
			'link': 'https://www.mishangyun.com/aff.php?aff=35',
			'pics': 'https://cdn.jsdelivr.net/gh/amujie/mojia@master/asset/img/advert.gif',
			'tips': '米上云香港GIA VPS20元起，购买魔加主题的新用户，赠送米上云香港VPS一个月使用时间！',
			'type': 'pic',
		}, {
			'name1': '<span class="layui-badge">推荐</span> <font color="red">魔加数据填充插件</font>',
			'link1': 'https://www.mishangyun.com/aff.php?aff=35',
			'tips1': '限时优惠',
			'name2': '<span class="layui-badge">推荐</span> <font color="red">魔加数据填充插件</font>',
			'link2': 'https://www.mishangyun.com/aff.php?aff=35',
			'tips2': '限时优惠',
			'name3': '<span class="layui-badge">推荐</span> <font color="red">魔加数据填充插件</font>',
			'link3': 'https://www.mishangyun.com/aff.php?aff=35',
			'tips3': '限时优惠',
			'type': 'text',
		}]
	};
	exports('income', mojia);
});

var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '文物整合',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 文物整合'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr__2];
lyr__2.set('fieldAliases', {'編號': '編號', '原始編號': '原始編號', '名稱': '名稱', '原收藏地': '原收藏地', '緯度': '緯度', '經度': '經度', '年代': '年代', '尺寸': '尺寸', '保存狀況': '保存狀況', '收藏位置': '收藏位置', '備註': '備註', '是否數位化': '是否數位化', });
lyr__2.set('fieldImages', {'編號': 'TextEdit', '原始編號': 'TextEdit', '名稱': 'TextEdit', '原收藏地': 'TextEdit', '緯度': 'TextEdit', '經度': 'TextEdit', '年代': 'TextEdit', '尺寸': 'TextEdit', '保存狀況': 'TextEdit', '收藏位置': 'TextEdit', '備註': 'TextEdit', '是否數位化': 'TextEdit', });
lyr__2.set('fieldLabels', {'編號': 'inline label - always visible', '原始編號': 'inline label - always visible', '名稱': 'inline label - always visible', '原收藏地': 'inline label - always visible', '緯度': 'inline label - always visible', '經度': 'inline label - always visible', '年代': 'inline label - always visible', '尺寸': 'inline label - always visible', '保存狀況': 'inline label - always visible', '收藏位置': 'inline label - always visible', '備註': 'inline label - always visible', '是否數位化': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
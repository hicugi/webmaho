/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='assets/js/izum/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Image',
                            type: 'image',
                            rect: ['-72px', '0px', '1487px', '400px', 'auto', 'auto'],
                            autoOrient: true,
                            clip: 'rect(0px 471px 400px 233.33349609375px)',
                            fill: ["rgba(0,0,0,0)",im+"jump.svg",'-239px','0px','100%','100%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5197.2441286496,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Image}",
                            [257,0],
                            [22,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid3",
                            "background-position",
                            153,
                            0,
                            "linear",
                            "${Image}",
                            [18,0],
                            [-250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            253,
                            0,
                            "linear",
                            "${Image}",
                            [-250,0],
                            [-532,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            354,
                            0,
                            "linear",
                            "${Image}",
                            [-801,0],
                            [-1037,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            454,
                            0,
                            "linear",
                            "${Image}",
                            [-1037,0],
                            [265,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            554,
                            0,
                            "linear",
                            "${Image}",
                            [265,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            654,
                            0,
                            "linear",
                            "${Image}",
                            [184,0],
                            [27,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            803,
                            0,
                            "linear",
                            "${Image}",
                            [22,0],
                            [-250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            903,
                            0,
                            "linear",
                            "${Image}",
                            [-250,0],
                            [-532,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${Image}",
                            [-532,0],
                            [-1037,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            1100,
                            0,
                            "linear",
                            "${Image}",
                            [-1037,0],
                            [265,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${Image}",
                            [265,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${Image}",
                            [-245,0],
                            [27,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${Image}",
                            [27,0],
                            [-239,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${Image}",
                            [-239,0],
                            [22,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            2750,
                            0,
                            "linear",
                            "${Image}",
                            [22,0],
                            [-250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            2850,
                            0,
                            "linear",
                            "${Image}",
                            [-250,0],
                            [-532,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            2952,
                            0,
                            "linear",
                            "${Image}",
                            [-532,0],
                            [-1037,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            3052,
                            0,
                            "linear",
                            "${Image}",
                            [-1037,0],
                            [265,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            3152,
                            0,
                            "linear",
                            "${Image}",
                            [265,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            3252,
                            0,
                            "linear",
                            "${Image}",
                            [-245,0],
                            [27,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            3400,
                            0,
                            "linear",
                            "${Image}",
                            [27,0],
                            [-250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            3500,
                            0,
                            "linear",
                            "${Image}",
                            [-250,0],
                            [-532,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            3597,
                            0,
                            "linear",
                            "${Image}",
                            [-532,0],
                            [-1037,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            3697,
                            0,
                            "linear",
                            "${Image}",
                            [-1037,0],
                            [265,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            3797,
                            0,
                            "linear",
                            "${Image}",
                            [265,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            3897,
                            0,
                            "linear",
                            "${Image}",
                            [-245,0],
                            [27,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            4497,
                            0,
                            "linear",
                            "${Image}",
                            [27,0],
                            [-239,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            5197,
                            0,
                            "linear",
                            "${Image}",
                            [-239,0],
                            [22,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load(im+"jump_edgeActions.js");
})("EDGE-177873858");

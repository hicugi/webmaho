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
                            id: 'Image2',
                            type: 'image',
                            rect: ['147px', '-64px', '1948px', '528px', 'auto', 'auto'],
                            clip: 'rect(65.333251953125px 233.3330078125px 465.3330078125px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"sneaks1.svg",'-1682px','0px']
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
                    duration: 4980,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            80,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid63",
                            "background-position",
                            160,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid64",
                            "background-position",
                            260,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid65",
                            "background-position",
                            360,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            460,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid67",
                            "background-position",
                            560,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid68",
                            "background-position",
                            660,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid69",
                            "background-position",
                            760,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid70",
                            "background-position",
                            860,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid71",
                            "background-position",
                            960,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid72",
                            "background-position",
                            1060,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid73",
                            "background-position",
                            1160,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "background-position",
                            1260,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid88",
                            "background-position",
                            1340,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid89",
                            "background-position",
                            1420,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid90",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid91",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid92",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid93",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid94",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid95",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid96",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid97",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid98",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid99",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid100",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid101",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid102",
                            "background-position",
                            2680,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid103",
                            "background-position",
                            2760,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid104",
                            "background-position",
                            2840,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid105",
                            "background-position",
                            2940,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid106",
                            "background-position",
                            3040,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid107",
                            "background-position",
                            3140,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "background-position",
                            3240,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid109",
                            "background-position",
                            3340,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid110",
                            "background-position",
                            3440,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid111",
                            "background-position",
                            3540,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid112",
                            "background-position",
                            3640,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid113",
                            "background-position",
                            3740,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid114",
                            "background-position",
                            3840,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid115",
                            "background-position",
                            3940,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid116",
                            "background-position",
                            4020,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid117",
                            "background-position",
                            4100,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid118",
                            "background-position",
                            4180,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid119",
                            "background-position",
                            4280,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid120",
                            "background-position",
                            4380,
                            0,
                            "linear",
                            "${Image2}",
                            [-845,0],
                            [-1110,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid121",
                            "background-position",
                            4480,
                            0,
                            "linear",
                            "${Image2}",
                            [-1110,0],
                            [-1387,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid122",
                            "background-position",
                            4580,
                            0,
                            "linear",
                            "${Image2}",
                            [-1387,0],
                            [-1682,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid123",
                            "background-position",
                            4680,
                            0,
                            "linear",
                            "${Image2}",
                            [-1682,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid124",
                            "background-position",
                            4780,
                            0,
                            "linear",
                            "${Image2}",
                            [0,0],
                            [-266,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid125",
                            "background-position",
                            4880,
                            0,
                            "linear",
                            "${Image2}",
                            [-266,0],
                            [-563,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid126",
                            "background-position",
                            4980,
                            0,
                            "linear",
                            "${Image2}",
                            [-563,0],
                            [-845,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load(im+"sneaks_edgeActions.js");
})("EDGE-177873857");

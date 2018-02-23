TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_r_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_f_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_t.jpg",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_b_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_u_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_d_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.94,
        "pitch": 4.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_1_0_0_map.gif",
           "height": 75,
           "width": 75
          }
         ]
        },
        "yaw": 108.06
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_1_0.png",
           "height": 151,
           "width": 151
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.94,
        "pitch": 4.33,
        "yaw": 108.06
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_55FE18C3_5C23_9D1B_41C2_49A9B8F3BBA5",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26, this.camera_CB514DE2_C2FD_2372_41D7_46856E376137); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.5,
        "pitch": -14.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_0_0_0_map.gif",
           "height": 75,
           "width": 75
          }
         ]
        },
        "yaw": 109.03
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_0_0.png",
           "height": 151,
           "width": 151
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.5,
        "pitch": -14.13,
        "yaw": 109.03
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_55D06302_5C22_9315_41CA_B4DEFBF5B778",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B, this.camera_CB4ACE09_C2FD_20BE_41CD_12C5B769A320); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.9,
        "pitch": -15.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_3_0_map.gif",
           "height": 16,
           "width": 25
          }
         ]
        },
        "yaw": 109.32
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_3_0.png",
           "height": 54,
           "width": 87
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.9,
        "pitch": -15.5,
        "yaw": 109.32
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_6CE41CA5_61A8_5187_41CE_9813E481C9E1",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.64,
        "pitch": 4.43,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_2_0_map.gif",
           "height": 16,
           "width": 43
          }
         ]
        },
        "yaw": 109.43
       }
      ],
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_0_HS_2_0.png",
           "height": 47,
           "width": 129
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.64,
        "pitch": 4.43,
        "yaw": 109.43
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_6FC220E0_61A8_51BE_41C1_2B27C9E8DAFB",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_l_hq.jpeg",
       "height": 1080,
       "width": 1080
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMax": 120,
  "label": "bed room 1",
  "class": "Panorama",
  "id": "panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "pitch": 0,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_r_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_r.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_f_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_f.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_t.jpg",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_b_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_b.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_u_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_u.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_d_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_d.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.55,
           "pitch": 4.58,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_2_0_0_map.gif",
              "height": 75,
              "width": 75
             }
            ]
           },
           "yaw": 40.42
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_2_0.png",
              "height": 150,
              "width": 150
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.55,
           "pitch": 4.58,
           "yaw": 40.42
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_55D11429_5C2F_9516_41C2_BEA6D6716F9D",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6, this.camera_CB363E73_C2FD_2151_41DB_E6ED897B4AA2); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.03,
           "pitch": -16.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_1_0_0_map.gif",
              "height": 75,
              "width": 75
             }
            ]
           },
           "yaw": 41.18
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_1_0.png",
              "height": 150,
              "width": 150
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.03,
           "pitch": -16.51,
           "yaw": 41.18
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_5633A45A_5C2E_9535_41C1_A10D63455E90",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B, this.camera_CB23CE99_C2FD_21DE_41E3_471D98D43496); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.23,
           "pitch": -29.8,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_0_0_0_map.gif",
              "height": 57,
              "width": 65
             }
            ]
           },
           "yaw": 149.4
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_0_0.png",
              "height": 114,
              "width": 130
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.23,
           "pitch": -29.8,
           "yaw": 149.4
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_562C71D9_5C21_EF37_417C_01C4929FB840",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C, this.camera_CB11CEB8_C2FD_21DE_41E7_2F52F2E70FB0); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.13,
           "pitch": 1.3,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_4_0_map.gif",
              "height": 16,
              "width": 27
             }
            ]
           },
           "yaw": 44.3
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_4_0.png",
              "height": 110,
              "width": 190
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.13,
           "pitch": 1.3,
           "yaw": 44.3
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_6CDF5051_61B8_D09E_41D2_B14F236B74D5",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.03,
           "pitch": -16.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_3_0_map.gif",
              "height": 16,
              "width": 40
             }
            ]
           },
           "yaw": 43.14
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_0_HS_3_0.png",
              "height": 59,
              "width": 151
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.03,
           "pitch": -16.87,
           "yaw": 43.14
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_6C55A510_61B8_509D_41BE_32516D33F3E4",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true
        }
       ],
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_l_hq.jpeg",
          "height": 1272,
          "width": 1272
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_l.jpeg",
          "height": 1024,
          "width": 1024
         }
        ]
       }
      }
     ],
     "hfovMax": 120,
     "label": "LIVING 1",
     "class": "Panorama",
     "id": "panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26",
     "partial": false,
     "hfovMin": 60,
     "hfov": 360,
     "pitch": 0,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "panorama": "this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6",
       "yaw": 40.42,
       "backwardYaw": 108.06
      },
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_r_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_f_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          },
          "thumbnailUrl": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_t.jpg",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_b_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_u_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          },
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_d_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 18.05,
              "pitch": 4.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_1_0_0_map.gif",
                 "height": 75,
                 "width": 75
                }
               ]
              },
              "yaw": 156.71
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_1_0.png",
                 "height": 150,
                 "width": 150
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 18.05,
              "pitch": 4.9,
              "yaw": 156.71
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_619B9EFC_693C_923F_41BE_43B820C8DCB3",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26, this.camera_CB432E2E_C2FD_20F2_41E6_919C79110037); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 17.5,
              "pitch": -15.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_0_0_0_map.gif",
                 "height": 75,
                 "width": 75
                }
               ]
              },
              "yaw": 157.41
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_0_0.png",
                 "height": 150,
                 "width": 150
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.5,
              "pitch": -15.02,
              "yaw": 157.41
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_61946EFC_693C_923F_4199_946007DF5A92",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6, this.camera_CB3C1E4E_C2FD_20B2_41A4_ED2866520516); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 20.39,
              "pitch": 3.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_3_0_map.gif",
                 "height": 16,
                 "width": 30
                }
               ]
              },
              "yaw": 160.23
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_3_0.png",
                 "height": 90,
                 "width": 170
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.39,
              "pitch": 3.3,
              "yaw": 160.23
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_61947EFC_693C_923F_41C4_FBD55AACD39D",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 21.92,
              "pitch": -18.68,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_2_0_map.gif",
                 "height": 16,
                 "width": 28
                }
               ]
              },
              "yaw": 161.71
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_0_HS_2_0.png",
                 "height": 106,
                 "width": 192
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.92,
              "pitch": -18.68,
              "yaw": 161.71
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_61942EFC_693C_923F_41D0_1BA78D1EC17E",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           }
          ],
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_l_hq.jpeg",
             "height": 952,
             "width": 952
            }
           ]
          }
         }
        ],
        "hfovMax": 120,
        "label": "BED ROOM 2",
        "class": "Panorama",
        "id": "panorama_619B8EFC_693C_923F_41D2_17B95A50F13B",
        "partial": false,
        "hfovMin": 60,
        "hfov": 360,
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "panorama": "this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26",
          "yaw": 156.71,
          "backwardYaw": 41.18
         },
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "panorama": "this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6",
          "yaw": 157.41,
          "backwardYaw": 109.03
         }
        ],
        "thumbnailUrl": "media/panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_t.jpg",
        "vfov": 180
       },
       "yaw": 41.18,
       "backwardYaw": 156.71
      },
      {
       "class": "AdjacentPanorama",
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_r_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_r.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_f_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_f.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_t.jpg",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_b_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_b.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_u_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_u.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_d_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_d.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.56,
              "pitch": 3.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_3_0_0_map.gif",
                 "height": 75,
                 "width": 75
                }
               ]
              },
              "yaw": 5.56
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_3_0.png",
                 "height": 150,
                 "width": 150
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.56,
              "pitch": 3.84,
              "yaw": 5.56
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_54C9391F_5C23_BF2B_41D5_AE2AFB07A41D",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.34,
              "pitch": -10.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_2_0_0_map.gif",
                 "height": 75,
                 "width": 75
                }
               ]
              },
              "yaw": 5.85
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_2_0.png",
                 "height": 150,
                 "width": 150
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.34,
              "pitch": -10.93,
              "yaw": 5.85
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_5537799E_5C21_FF2D_41C6_14FE22182022",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12,
              "pitch": 2.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_1_0_map.gif",
                 "height": 16,
                 "width": 28
                }
               ]
              },
              "yaw": 5.35
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_1_0.png",
                 "height": 75,
                 "width": 133
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 12,
              "pitch": 2.49,
              "yaw": 5.35
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_56309CDD_5C3F_F52F_41D5_62864B73995E",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.2,
              "pitch": -10.51,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_0_0_map.gif",
                 "height": 16,
                 "width": 46
                }
               ]
              },
              "yaw": 5.64
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_0_0.png",
                 "height": 40,
                 "width": 115
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.2,
              "pitch": -10.51,
              "yaw": 5.64
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_5548AED4_5C22_953D_41C4_167A221F69D9",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.51,
              "pitch": -28.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_4_0_0_map.gif",
                 "height": 68,
                 "width": 79
                }
               ]
              },
              "yaw": -16.42
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_0_HS_4_0.png",
                 "height": 137,
                 "width": 158
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 12.51,
              "pitch": -28.49,
              "yaw": -16.42
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_50CC4DD3_5CE7_973B_41A4_331ED609EC91",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26, this.camera_CB0EBEDD_C2FD_2156_41E4_02726DF90661); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "enabledInCardboard": true
           }
          ],
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_l_hq.jpeg",
             "height": 1272,
             "width": 1272
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_l.jpeg",
             "height": 1024,
             "width": 1024
            }
           ]
          }
         }
        ],
        "hfovMax": 120,
        "label": "LIVING 2",
        "class": "Panorama",
        "id": "panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C",
        "partial": false,
        "hfovMin": 60,
        "hfov": 360,
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "distance": 1,
          "panorama": "this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26",
          "yaw": -16.42,
          "backwardYaw": 149.4
         }
        ],
        "thumbnailUrl": "media/panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_t.jpg",
        "vfov": 180
       },
       "yaw": 149.4,
       "backwardYaw": -16.42
      }
     ],
     "thumbnailUrl": "media/panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_t.jpg",
     "vfov": 180
    },
    "yaw": 108.06,
    "backwardYaw": 40.42
   },
   {
    "class": "AdjacentPanorama",
    "distance": 1,
    "panorama": "this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B",
    "yaw": 109.03,
    "backwardYaw": 157.41
   }
  ],
  "thumbnailUrl": "media/panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_t.jpg",
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 15.69,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.8
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 56.56,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.17
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 82.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.69
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 139.13,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.1
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 159.36,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.23
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -74.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -124.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -164.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -31.38
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -168.85,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.15
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -16.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -67.29
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -38.39,
   "yaw": -10.73
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B",
 {
  "class": "PanoramaCamera",
  "id": "panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 25.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 22.53,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -24.9
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 67.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.96
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 117.59,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 170.91,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -171.73,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -147.35,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -40.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -89.9,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.54
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -77.08,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.36
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -3.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.68
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -19.84,
   "yaw": -9.09
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -117.66,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -25.18
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -71.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.53
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -61.93,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -48.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -162.25,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.11
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -7.02,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.65
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 103.62,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.42
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 111.88,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 169.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -53.26
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 2.89,
   "yaw": -137.06
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C",
 {
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1389,
  "id": "panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 39.22,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -47.48,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -29.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -69.36,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.82
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -49.13,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.78
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -81.74,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -22.29,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.3
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -28.07,
   "yaw": 48.72
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5B5D11D9_5C22_6F37_41D1_DFFFA7B3A1B6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_619B8EFC_693C_923F_41D2_17B95A50F13B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5A8717F8_5C21_92F5_41C9_E3D5B1AC6C26",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5A870B18_5C21_9335_41CA_D0CF7AC5523C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB514DE2_C2FD_2372_41D7_46856E376137",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 2.8,
     "targetYaw": -137.06,
     "easing": "cubic_in_out",
     "yawSpeed": 4.62,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -117.66,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -25.18
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -71.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.53
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -61.93,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -48.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -162.25,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.11
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -7.02,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.65
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 103.62,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.42
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 111.88,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 169.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -53.26
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -139.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB4ACE09_C2FD_20BE_41CD_12C5B769A320",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 10.98,
     "targetYaw": -9.09,
     "easing": "cubic_in_out",
     "yawSpeed": 21.05,
     "targetPitch": -19.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 25.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 22.53,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -24.9
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 67.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.96
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 117.59,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 170.91,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -171.73,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -147.35,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -40.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -89.9,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.54
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -77.08,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.36
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -3.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.68
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -22.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB432E2E_C2FD_20F2_41E6_919C79110037",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 2.59,
     "targetYaw": -137.06,
     "easing": "cubic_in_out",
     "yawSpeed": 4.2,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -117.66,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -25.18
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -71.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.53
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -61.93,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -48.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -162.25,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.11
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -7.02,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.65
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 103.62,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.42
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 111.88,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 169.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -53.26
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -138.82
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB3C1E4E_C2FD_20B2_41A4_ED2866520516",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 32.16,
     "targetYaw": -10.73,
     "easing": "cubic_in_out",
     "yawSpeed": 63.62,
     "targetPitch": -38.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 15.69,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.8
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 56.56,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.17
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 82.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.69
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 139.13,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.1
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 159.36,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.23
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -74.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -124.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -164.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -31.38
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -168.85,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.15
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -16.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -67.29
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -70.97
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB363E73_C2FD_2151_41DB_E6ED897B4AA2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 32.52,
     "targetYaw": -10.73,
     "easing": "cubic_in_out",
     "yawSpeed": 64.34,
     "targetPitch": -38.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 15.69,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.8
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 56.56,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -18.17
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 82.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -15.69
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 139.13,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -16.1
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 159.36,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.23
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -74.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -12.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -124.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -164.72,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -31.38
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -168.85,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.15
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -16.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -67.29
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -71.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB23CE99_C2FD_21DE_41E3_471D98D43496",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 11.14,
     "targetYaw": -9.09,
     "easing": "cubic_in_out",
     "yawSpeed": 21.38,
     "targetPitch": -19.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 25.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 22.53,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -24.9
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 67.16,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.96
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 117.59,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -4.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 170.91,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -11.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -171.73,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -147.35,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -40.2
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -89.9,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.54
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -77.08,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -20.36
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -3.51,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.68
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -23.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "manualRotationSpeed": 1389,
  "id": "camera_CB11CEB8_C2FD_21DE_41E7_2F52F2E70FB0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 87.37,
     "targetYaw": 48.72,
     "easing": "cubic_in_out",
     "yawSpeed": 174.55,
     "targetPitch": -28.07
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 39.22,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -8.26
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 0.41
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -47.48,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -29.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -69.36,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -19.82
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -49.13,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -5.78
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -81.74,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -22.29,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -3.3
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 163.58
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_CB0EBEDD_C2FD_2156_41E4_02726DF90661",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 51.09,
     "targetYaw": -137.06,
     "easing": "cubic_in_out",
     "yawSpeed": 101.65,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -117.66,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -25.18
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -71.83,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -23.53
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -61.93,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -48.72
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -162.25,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -42.11
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": -7.02,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 1.65
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 80.5,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -7.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 103.62,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -26.42
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 111.88,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": 2.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "pitchSpeed": 17.05,
     "targetYaw": 169.68,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "targetPitch": -53.26
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -30.6
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "progressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "shadow": false,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarBorderColor": "#FFFFFF",
  "borderRadius": 0,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarBottom": 5,
  "height": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "id": "MainViewer",
  "width": "100%",
  "progressBorderColor": "#000000",
  "paddingRight": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "minWidth": 100,
  "progressBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "toolTipOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipFontWeight": "normal"
 }
], 
 "borderSize": 0,
 "gap": 10,
 "class": "Player",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "id": "rootPlayer",
 "scripts": {
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   else if(audio.get('id') in audios){       return;   }   audios[audio.get('id')] = audio;   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "unregisterKey": function(key){    delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "registerKey": function(key, value){    window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){    return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audio.play();   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audio.pause();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } }
 },
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%"
})
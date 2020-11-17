webpackJsonp([1], {
    "17N7": function (t, e) {}, CXKf: function (t, e) {}, NHnr: function (t, e, i) {
        "use strict";

        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = i("7+uW"),
            a = i("Ml+6"),
            r = i("bOdI"),
            o = i.n(r),
            s = i("/lXX"),
            c = i.n(s),
            l = new a.AnimationMixer(),
            d = new a.Clock(),
            p = new a.Scene(),
            h = window.innerWidth,
            u = window.innerHeight,
            m = h / u,
            g = new a.OrthographicCamera(-60 * m, 60 * m, 60, -60, 1, 1e3);
        g.position.set(306, 284, 406), g.lookAt(p.position);
        var v = new a.WebGLRenderer({ antialias: !0 });
        v.setSize(h, u), v.setPixelRatio(window.devicePixelRatio), function t() {
            v.render(p, g), requestAnimationFrame(t);
        }();
        var f = new c.a(g);
        f.enablePan = !1, f.minZoom = .5, f.maxZoom = 1.5;
        var b = new a.DirectionalLight(16777215, .8);
        b.position.set(0, 1, 0), p.add(b);
        var w = new a.PointLight(16777215, 1);
        w.position.set(-865, 374, 381), p.add(w);
        var y = new a.PointLight(16777215, 1);
        y.position.set(0, 0, 260), p.add(y);
        var j = new a.AmbientLight(16777215, 1);
        p.add(j), p.add(new a.AmbientLight(16777215, 1)), p.add(new a.AmbientLight(16777215, 1)), p.add(new a.AmbientLight(16777215, 1)), p.add(new a.AmbientLight(16777215, 1)), p.add(new a.AmbientLight(16777215, 1));
        var x = {
            name: "ObjectLoader",
            props: { src: { type: String, default: "" }, clickTime: { type: Number, default: 0 } },
            data: function () {
                return {
                    progress: 0,
                    left: (window.innerWidth - 280) / 2,
                    top: (window.innerHeight - 25) / 2,
                    leftCenter: (window.innerWidth - 340) / 2,
                    obj: null,
                    clickBool: !1,
                    AnimationAction: null
                };
            },
            computed: {},
            created: function () {
                var t = this;
                window.onresize = function () {
                    t.leftCenter = (window.innerWidth - 340) / 2, v.setSize(window.innerWidth, window.innerHeight);
                    var e = window.innerWidth / window.innerHeight;
                    g.left = -60 * e, g.right = 60 * e, g.top = 60, g.bottom = -60, g.updateProjectionMatrix();
                };
                var e = new a.gac(),
                    i = new a.TextureLoader(),
                    n = i.load("./car/dif" + "fuse.j" + "pg"),
                    r = i.load("./car/wheel.png"),
                    s = new a.CubeTextureLoader().setPath("./car/env/").load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
                s.minFilter = a.NearestFilter, e.ld(this.src, function (e) {
                    var i;
                    t.obj = e, t.obj.name = "car", t.obj.scale.set(.15, .15, .15), console.log(e), t.obj.children[0].geometry.computeBoundingBox(), console.log(t.obj.children[0].geometry.boundingBox), t.obj.children[0].material = new a.MeshPhysicalMaterial({
                        map: n,
                        metalness: .9,
                        roughness: .2,
                        envMap: s,
                        envMapIntensity: .2,
                        reflectivity: 8
                    }), t.obj.children[1].material = new a.MeshPhysicalMaterial({
                        color: 0,
                        transparent: !0,
                        opacity: .5,
                        refractionRatio: .67,
                        metalness: .9,
                        roughness: 0,
                        envMap: s,
                        envMapIntensity: .2,
                        reflectivity: 8
                    }), t.obj.children[2].material = new a.MeshPhysicalMaterial({
                        map: n,
                        metalness: .9,
                        roughness: 0,
                        envMap: s,
                        envMapIntensity: .3,
                        reflectivity: 8
                    }), t.obj.children[3].material = new a.MeshPhysicalMaterial({
                        color: 6965463,
                        metalness: .9,
                        roughness: 0,
                        envMap: s,
                        envMapIntensity: .2,
                        reflectivity: 10
                    });
                    var c = new a.ColorKeyframeTrack(".material.color", [0, 10, 20, 30], [.5, .5, .5, .9, .1, .1, .1, .1, .9, .42, .28, .84]),
                        d = new a.AnimationClip("default", 40, [c]);
                    t.AnimationAction = l.clipAction(d, t.obj.children[3]), t.AnimationAction.timeScale = 5, t.AnimationAction.play(), t.obj.children[4].material = new a.MeshPhysicalMaterial({
                        metalness: .9,
                        roughness: 0,
                        envMap: s,
                        envMapIntensity: .3,
                        reflectivity: 11
                    }), t.obj.children[5].material = new a.MeshPhysicalMaterial((i = {
                        metalness: 1,
                        map: r
                    }, o()(i, "metalness", .9), o()(i, "roughness", 0), o()(i, "envMap", s), o()(i, "envMapIntensity", .3), o()(i, "reflectivity", 8), i));
                    var h = new a.Group();
                    h.name = "wheelGroup";
                    var u = new a.Group();
                    t.obj.children[5].geometry.center(), t.obj.children[4].geometry.center(), u.add(t.obj.children[4], t.obj.children[5]), console.log(u.position), u.position.set(-140, 60, 230);
                    var m = u.clone();
                    m.position.set(-140, 60, -265);
                    var g = u.clone();
                    g.rotateY(Math.PI), g.position.set(140, 60, 230);
                    var v = u.clone();
                    v.rotateY(Math.PI), v.position.set(140, 60, -265), h.add(u, m, g, v), t.obj.add(h), p.add(e), t.obj.name = "car";
                }, function (e) {
                    t.progress = Math.floor(e.loaded / e.total * 100);
                }), console.log(this.progress);
            },
            mounted: function () {},
            watch: {
                clickTime: function (t) {
                    t > 5 && (this.AnimationAction.paused = !1);
                }
            },
            methods: {
                click1: function () {
                    this.time = d.start(), this.AnimationAction.paused = !0, this.obj.children[3].material.color.setRGB(.5, .5, .5);
                }, click2: function () {
                    this.time = d.start(), this.AnimationAction.paused = !0, this.obj.children[3].material.color.setRGB(.9, .1, .1);
                }, click3: function () {
                    this.time = d.start(), this.obj.children[3].material.color.setRGB(.1, .1, .9);
                }, click4: function () {
                    this.time = d.start(), this.obj.children[3].material.color.setRGB(.42, .28, .84);
                }
            }
        },
            k = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {}, [100 !== t.progress ? i("div", {
                    staticClass: "block",
                    staticStyle: { display: "inline", position: "absolute", width: "280px" },
                    style: { left: t.left + "px", top: t.top + "px" }
                }, [i("el-progress", {
                    attrs: {
                        "text-inside": !0,
                        "stroke-width": 25,
                        percentage: t.progress
                    }
                })], 1) : t._e(), t._v(" "), i("div", {
                    staticClass: "left",
                    staticStyle: { bottom: "10px" },
                    style: { left: t.leftCenter + "px" }
                }, [i("div", [i("el-button", {
                    staticStyle: { padding: "5px", background: "rgba(83,83,83,0.0)", border: "0px" },
                    attrs: { type: "info" },
                    on: {
                        click: function (e) {
                            t.click1();
                        }
                    }
                }, [i("img", {
                    staticStyle: { "border-radius": "30px" },
                    attrs: { src: "car/images/1.png", width: "60", height: "60" }
                }), t._v(" "), i("br")])], 1), t._v(" "), i("div", {}, [t._v("  ")]), t._v(" "), i("div", [i("el-button", {
                    staticStyle: {
                        padding: "5px",
                        background: "rgba(83,83,83,0.0)",
                        border: "0px"
                    }, attrs: { type: "info" }, on: {
                        click: function (e) {
                            t.click2();
                        }
                    }
                }, [i("i", [i("img", {
                    staticStyle: { "border-radius": "30px" },
                    attrs: { src: "car/images/2.png", width: "60", height: "60" }
                })]), t._v(" "), i("br")])], 1), t._v(" "), i("div", {}, [t._v("  ")]), t._v(" "), i("div", [i("el-button", {
                    staticStyle: {
                        padding: "5px",
                        background: "rgba(83,83,83,0.0)",
                        border: "0px"
                    }, attrs: { type: "info" }, on: {
                        click: function (e) {
                            t.click3();
                        }
                    }
                }, [i("i", [i("img", {
                    staticStyle: { "border-radius": "30px" },
                    attrs: { src: "car/images/3.png", width: "60", height: "60" }
                })]), t._v(" "), i("br")])], 1), t._v(" "), i("div", {}, [t._v("  ")]), t._v(" "), i("div", [i("el-button", {
                    staticStyle: {
                        padding: "5px",
                        background: "rgba(83,83,83,0.0)",
                        border: "0px"
                    }, attrs: { type: "info" }, on: {
                        click: function (e) {
                            t.click4();
                        }
                    }
                }, [i("i", [i("img", {
                    staticStyle: { "border-radius": "30px" },
                    attrs: { src: "car/images/4.png", width: "60", height: "60" }
                })]), t._v(" "), i("br")])], 1)])]);
            }, staticRenderFns: []
        };
        var _ = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0);
            }, staticRenderFns: [function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", { attrs: { id: "" } }, [e("a", {
                    staticClass: "aa",
                    staticStyle: { left: "0px" },
                    attrs: { href: "http://www.yanhuangxueyuan.com/", target: "_blank" }
                }, [this._v("郭隆邦技术博客")]), this._v(" "), e("a", {
                    staticClass: "aa",
                    staticStyle: { right: "0px" },
                    attrs: { href: "https://ke.qq.com/course/325673?flowToken=1004926", target: "_blank" }
                }, [this._v("实现技术")])]);
            }]
        };
        var M = {
            name: "HelloWorld", data: function () {
                return { clickTime: 0 };
            }, created: function () {
                this.$nextTick(function () {});
            }, mounted: function () {
                this.$refs.webgl.append(v.domElement);
                var t = this;
                !function e() {
                    l && l.update(d.getDelta()), t.clickTime = d.getElapsedTime(), v.render(p, g), requestAnimationFrame(e), p.getObjectByName("car") && p.getObjectByName("car").rotateY(.007);
                }();
            }, components: {
                ObjectLoader: i("VU/8")(x, k, !1, function (t) {
                    i("e6qL");
                }, "data-v-6022a61c", null).exports, GlTitle: i("VU/8")({
                    name: "", data: function () {
                        return {};
                    }
                }, _, !1, function (t) {
                    i("Zk9N");
                }, "data-v-7ef712a5", null).exports
            }, methods: {}
        },
            A = {
            render: function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", { ref: "webgl" }), this._v(" "), e("object-loader", {
                    attrs: {
                        src: "./car/fd1b9130246a605eb5" + "2fb955c6675c59.h" + "tt",
                        clickTime: this.clickTime
                    }
                }), this._v(" "), e("gl-title", {})], 1);
            }, staticRenderFns: []
        };
        var L = {
            name: "App", components: {
                GlRender: i("VU/8")(M, A, !1, function (t) {
                    i("CXKf");
                }, "data-v-8ccccd80", null).exports
            }
        },
            S = {
            render: function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", { attrs: { id: "app" } }, [e("gl-render", {})], 1);
            }, staticRenderFns: []
        };
        var P = i("VU/8")(L, S, !1, function (t) {
            i("17N7");
        }, null, null).exports,
            R = i("zL8q"),
            C = i.n(R);
        i("tvR6");
        n.default.config.productionTip = !1, n.default.use(C.a), new n.default({
            el: "#app",
            components: { App: P },
            template: "<App/>"
        });
    }, Zk9N: function (t, e) {}, e6qL: function (t, e) {}, tvR6: function (t, e) {}
}, ["NHnr"]);

//# sourceMappingURL=f7e0f37ab9955250b67c-compiled.js.map
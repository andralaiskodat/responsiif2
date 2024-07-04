import { ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _imports_0 = "" + __buildAssetsURL("profil.BV3VX1GB.jpeg");
const _sfc_main$1 = {
  name: "HeroSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"><link rel="stylesheet" href="/assets/main.css"><section class="hero"><div class="container"><div class="main-body"><div class="row gutters-sm"><div class="col-md-4 mb-3"><div class="card"><div class="card-body data-v-040fbd33"><div class="d-flex flex-column align-items-center text-center"><img${ssrRenderAttr("src", _imports_0)} alt="Admin" class="circle" width="150"><div class="mt-3"><h5>Fransisko Andrade Laiskodat</h5><p class="text-secondary mb-2">Mahasiswa semester 4 jurusan S1 Informatika, Universitas Amikom Yogyakarta yang saat ini sedang mengambil konsentrasi Pemograman Basis Data dengan pengalaman berorganisasi dan bekerja dalam tim. Senang mempelajari hal baru, memiliki keterampilan komunikasi, dan berdedikasi untuk bekerja dalam tim. Bersemangat mengejar karir terutama dalam bidang Full Stack Web Dev.</p><p class="text-muted font-size-sm">Sleman, Yogyakarta</p><a href="https://www.instagram.com/anndraa8._?igsh=MWQwMWZ6bXYwZmYxMQ%3D%3D&amp;utm_source=qr"><button class="btn btn-primary">Follow</button></a><a href="https://www.instagram.com/anndraa8._?igsh=MWQwMWZ6bXYwZmYxMQ%3D%3D&amp;utm_source=qr"><button class="btn btn-primary">Message</button></a></div></div></div></div><div class="card mt-3"><ul class="list-group list-group-flush"><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6><span class="text-secondary">andralaiskodat</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6><span class="text-secondary">@andralaiskodat17</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6><span class="text-secondary">@anndraa8._</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6><span class="text-secondary">Andra Laiskodat</span></li></ul></div></div><div class="col-md-8"><div class="card mb-3"><div class="card-body"><div class="row"><div class="col-sm-3"><h6 class="mb-0">Full Name</h6></div><div class="col-sm-9 text-secondary"> Fransisko Andrade Laiskodat </div></div><hr><div class="row"><div class="col-sm-3"><h6 class="mb-0">Email</h6></div><div class="col-sm-9 text-secondary"> andraqbz@gmail.com </div></div><hr><div class="row"><div class="col-sm-3"><h6 class="mb-0">Phone</h6></div><div class="col-sm-9 text-secondary"> (+62) 81337542965 </div></div><hr><div class="row"><div class="col-sm-3"><h6 class="mb-0">Universitas</h6></div><div class="col-sm-9 text-secondary"> Amikom Yogyakarta </div></div><hr><div class="row"><div class="col-sm-3"><h6 class="mb-0">Major</h6></div><div class="col-sm-9 text-secondary"> Bachelor of Informatics </div></div><hr><div class="row"></div></div></div><div class="row gutters-sm"><div class="col-sm-6 mb-3"><div class="card h-100"><div class="card-body"><h6 class="d-flex align-items-center mb-3">Hard Skill</h6><small>HTML</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div><small>CSS</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div></div><small>Java Script</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "60%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div></div><small>Laravel</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "50%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div></div><small>My SQL</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "75%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div><div class="col-sm-6 mb-3"><div class="card h-100"><div class="card-body"><h6 class="d-flex align-items-center mb-3">Soft Skill</h6><small>Make Decisions</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div><small>Public Speaking</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div></div><small>Critical Thinking</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div></div><small>Problem Solve</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div><div class="col-sm-12 mb-3"><div class="card h-100"><div class="card-body"><h6 class="d-flex align-items-center mb-3">Experience</h6><small>Make Decisions</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div><small>Public Speaking</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div></div><small>Critical Thinking</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div></div><small>Problem Solve</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}"><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeroSection: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-Dnrb4aEr.js.map

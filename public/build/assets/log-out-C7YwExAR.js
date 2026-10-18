import { r as state, H as page, o as set, q as get, d as push, C as spread_props, z as comment, m as first_child, E as noop, b as append, c as pop, D as rest_props } from "./app-B8UKlAbY.js";
import { I as Icon, s as snippet } from "./Icon-zRzq_-gS.js";
class AuthState {
  // 1. Declare private reactive state using Svelte 5 runes
  #user = state(null);
  constructor() {
    page.subscribe(($page) => {
      set(this.#user, $page?.props?.auth?.user ?? null, true);
    });
  }
  // 3. GETTERS are mandatory for Svelte 5 to track reactivity in components
  get user() {
    return get(this.#user);
  }
  get isAuthenticated() {
    return get(this.#user) !== null;
  }
  // Check for a specific role
  hasRole(role) {
    return this.user?.role === role;
  }
  // Check if user has a specific permission
  can(permission) {
    return this.user?.permissions?.includes(permission) ?? false;
  }
  // Specific helper for your engineering modules
  get canAccessPDM() {
    return this.hasRole("admin") || this.can("view_pdm");
  }
  get canAccessReqs() {
    return this.hasRole("admin") || this.can("view_reqs");
  }
}
const auth = new AuthState();
function Log_out($$anchor, $$props) {
  push($$props, true);
  let props = rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  Icon($$anchor, spread_props({ name: "log-out" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
export {
  Log_out as L,
  auth as a
};
//# sourceMappingURL=log-out-C7YwExAR.js.map

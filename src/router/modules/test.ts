export default {
  path: "/test",
  redirect: "/test/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "test page",
    rank: 10
  },
  children: [
    {
      path: "/test/index",
      name: "TEST PAGE",
      component: () => import("@/views/test.vue"),
      meta: {
        title: "test page"
      }
    }
  ]
} satisfies RouteConfigsTable;

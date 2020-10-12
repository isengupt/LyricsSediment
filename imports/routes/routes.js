import React from "react";
import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { FlowRouterMeta } from "meteor/ostrio:flow-router-meta";

import { mount } from "react-mounter";
import Footer from "../ui/pages/utils/Footer"
import Header from "../ui/pages/utils/Header"
import Template from "../ui/pages/utils/Template"
import App from "../ui/App"

FlowRouter.route("/", {
    name: "index",
  
    action() {
      mount(Template, {
        Header: Header,
        Content: App,
        Footer: Footer,
      });
    },
  });
import {clientManager} from "lib"
import TopPage from "@/components/TopPage.vue"
// console.log(require.resolve("./components/TopPage.vue"))

import router from "./router"

clientManager(TopPage)


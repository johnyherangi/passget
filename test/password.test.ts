import { expect } from "chai"
import password from "../src/password"

describe("password() tests", () => {
    it("generates a password of default length 32", () => {
        expect(password().length).to.eq(32)
    })
})

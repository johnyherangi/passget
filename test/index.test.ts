import sinon from "sinon"
import { expect } from "chai"

describe("index.ts tests", () => {
    afterEach(() => {
        sinon.restore()
    })

    it("prints 'Hello, World!'", () => {
        const consoleSpy = sinon.stub(console, "log")

        require("../src/index")

        expect(consoleSpy.args).to.deep.eq([["Hello, World!"]])
    })
})

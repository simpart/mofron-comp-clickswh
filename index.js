/**
 * @file   mofron-comp-clickswh/index.js
 * @author simpart
 */
const mf = require('mofron');
const Switch = require('mofron-comp-switch');
const Click = require('mofron-event-click');

mf.comp.ClickSwh = class extends Switch {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('ClickSwh');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            let clk = (swh) => {
                try { swh.swComp(); } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            this.event([ new Click(clk) ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.ClickSwh;
/* end of file */

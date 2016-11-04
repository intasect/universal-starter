import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    About Component
    <ng2-gethtml>
      <button>Click Me!</button>
      <div style="width: 658px; margin-top: 11px; margin-left: 6px;" class="floatClear">
        <ul style="list-style-type:none;font-size:0px;">
          <li id="netbktopsmall01" class="floatL" style="width: 166px;"><script type="text/javascript">Rtoaster.hide();</script></li>
          <li id="netbktopsmall02" class="floatL" style="width: 166px;"><script type="text/javascript">Rtoaster.hide();</script></li>
          <li id="netbktopsmall03" class="floatL" style="width: 166px;"><script type="text/javascript">Rtoaster.hide();</script></li>
          <li id="netbktopsmall04" class="floatL" style="width: 166px;"><script type="text/javascript">Rtoaster.hide();</script></li>
        </ul>
      </div>
      <ng2-script src="https://contents.netbk.co.jp/pc/js/Rtoaster.js"></ng2-script>
      <ng2-script>
          //console.log(Rtoaster.init);
          //Rtoaster.init("RTA-d0a3-19753cfa1660");
          //Rtoaster.recommendNow("kouza_bnr01","netbktopsmall01","netbktopsmall02","netbktopsmall03","netbktopsmall04");
      </ng2-script>
    </ng2-gethtml>
  `
})
export class AboutComponent {

}

console.log("hi");

document.getElementById("btn").addEventListener("click", btnCli);

function btnCli() {
  let wave = +document.getElementById("wave_s").value;
  let dual = +document.getElementById("dual_s").value;
  let fast = +document.getElementById("fast_s").value;
  let CPS = +document.getElementById("CPS_s").value;
  let mem = +document.getElementById("mem_s").value;
  let timing = +document.getElementById("timing_s").value;
  let ship = +document.getElementById("ship_s").value;
  let chng = +document.getElementById("chng_s").value;
  let dis = +document.getElementById("dis_s").value;

  let avg = (wave + dual + fast + CPS + mem + timing + ship + chng + dis) / 9;
  document.getElementById("output").innerHTML = Math.round(avg);
}

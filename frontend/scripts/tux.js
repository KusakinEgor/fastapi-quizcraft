let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let tick = 0;

// svg path arch linux icon
const archPath = new Path2D(`
M15.188 0.807
c-1.354 3.313-2.167 5.484-3.672 8.703
0.922 0.979 2.057 2.12 3.896 3.406
-1.979-0.818-3.328-1.635-4.339-2.484
-1.927 4.026-4.948 9.75-11.073 20.76
4.818-2.781 8.547-4.495 12.026-5.151
-0.146-0.641-0.234-1.333-0.229-2.063
l0.005-0.151
c0.078-3.089 1.682-5.458 3.583-5.297
s3.38 2.792 3.307 5.88
c-0.016 0.578-0.083 1.135-0.198 1.656
3.443 0.672 7.135 2.38 11.885 5.125
-0.938-1.724-1.771-3.281-2.573-4.76
-1.255-0.974-2.568-2.245-5.24-3.62
1.839 0.479 3.151 1.031 4.177 1.646
-8.12-15.109-8.771-17.12-11.557-23.651
z
`);

function drawArchLogo() {
    tick += 0.016;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const floatingY = Math.sin(tick) * 2;
    const glowSize = 8 + Math.sin(tick * 2) * 3;

    ctx.save();

    ctx.translate(50, 55 + floatingY);

    ctx.scale(2.4, 2.4);
    ctx.translate(-16, -16);

    ctx.shadowBlur = glowSize;
    ctx.shadowColor = "#1793d1";

    const hueShift = Math.sin(tick) * 4;
    const gradient = ctx.createLinearGradient(16, 0, 16, 32);
    gradient.addColorStop(0, `hsl(${205 + hueShift}, 85%, 65%)`);
    gradient.addColorStop(1, `hsl(${215 + hueShift}, 70%, 25%)`);

    ctx.fillStyle = gradient;

    ctx.fill(archPath);

    ctx.restore();
    requestAnimationFrame(drawArchLogo);
}

drawArchLogo();

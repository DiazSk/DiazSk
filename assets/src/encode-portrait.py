# Encodes the recorded cold open (coldopen.mjs output dir as cwd) into an animated WebP.
# Usage: python3 encode-portrait.py 960 15 55   -> trims from the first black frame, 7 s, img2webp lossy
import json,subprocess,os,sys
W,FPS,Q=int(sys.argv[1]),int(sys.argv[2]),sys.argv[3]
t=json.load(open('times.json'))
start=2; end=t[start]+7.0
sel=[];nxt=t[start]
for i in range(start,len(t)):
    if t[i]>end: break
    if t[i]>=nxt-1e-6: sel.append(i); nxt+=1/FPS
d=f'r{W}'; os.makedirs(d,exist_ok=True)
args=['img2webp','-loop','0','-lossy','-q',Q,'-m','6']
for k,i in enumerate(sel):
    dst=f'{d}/{i:04d}.png'
    if not os.path.exists(dst): subprocess.run(['magick',f'f{i:04d}.png','-resize',f'{W}x',dst],check=True)
    dur=round((t[sel[k+1]]-t[i])*1000) if k+1<len(sel) else 1500
    args+=['-d',str(max(dur,20)),dst]
out=f'hp-{W}-{FPS}-{Q}.webp'
args+=['-o',out]
subprocess.run(args,check=True,capture_output=True)
print(out,len(sel),'frames',os.path.getsize(out))

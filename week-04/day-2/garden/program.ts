import { Flower } from './flower'
import { Tree } from './tree'
import { Plant } from './plant'
import { Garden } from './garden'


let yellow: Flower = new Flower(`yellow`, 1);
let blue: Flower = new Flower(`blue`, 1);
let purple: Tree = new Tree(`purple`, 3);
let orange: Tree = new Tree(`orange`, 3);


yellow.showGarden()
blue.showGarden();
purple.showGarden();
orange.showGarden();


console.log(`Watering with 40`)
yellow.firstWatering()
blue.firstWatering();
purple.firstWatering();
orange.firstWatering();
yellow.showGarden()
blue.showGarden();
purple.showGarden();
orange.showGarden();

console.log(`Watering with 70`)
yellow.secondWatering()
blue.secondWatering();
purple.secondWatering();
orange.secondWatering();
yellow.showGarden()
blue.showGarden();
purple.showGarden();
orange.showGarden();
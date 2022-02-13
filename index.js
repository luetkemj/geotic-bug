import { Component, Engine } from "geotic";

const engine = new Engine();

class InFov extends Component {}

engine.registerComponent(InFov);

const world = engine.createWorld();

const entity = world.createEntity();

entity.add(InFov);

// entity.remove throws an error
entity.remove(InFov);
// tried all of these:
// entity.remove("InFov");
// entity.remove("inFov");
// entity.remove("in-fov");

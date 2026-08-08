class SimpleSensorApiWrapper extends IcueWidgetApiWrapper {
	getSensorValue(id) { return this.request(this.plugin.getSensorValue, id); }
	getSensorUnits(id) { return this.request(this.plugin.getSensorUnits, id); }
}

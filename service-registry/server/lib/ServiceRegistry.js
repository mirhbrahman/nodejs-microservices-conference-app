class ServiceRegistry{
	constructor(log){
		this.log = log;
		this.services = {};
		this.timeout = 30;
	}

	register(name, version, ip, port){
		const key = name + version + ip + port;
	}
}

module.exports = ServiceRegistry;
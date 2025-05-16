const service = new Service()
const viewDataController = new ViewDataController()

service.init().then((data) => {
    viewDataController.renderData(data)
})
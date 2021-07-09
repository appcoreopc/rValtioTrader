export interface ToolBarButtonsState  {
    data:  { 
      build: {
        status: string
      },
      save: {
        status: string
      }, 
      zoom: {
        status: string
      }, 
      upload: {
        status: string
      },
      openLoadApp : {
        status : string, 
        appName : string, 
        appId : string
      }
    }
  }
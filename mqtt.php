<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" >
        <title>
            MQTT
        </title>
    </head>
    <body>
        
        <div id="app" class="container-fluid">
            <div class="row">
                <div class="col-11 mt-2">
                    <div class="card">
                        <div class="card-header">
                            Received messages
                        </div>
                        <div class="card-body">
                            <div class="row" v-for="msg in messages">
                                <div class="col-5 border m-1">
                                    {{msg.topic}}
                                </div>
                                <div class="col-5 border m-1">
                                    {{msg.payload}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-11 mt-2">
                    <div class="card">
                        <div class="card-header">
                            Publish a message
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label>Topic</label>
                                <input type="text" v-model="publishTopic" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Payload</label>
                                <input type="text" v-model="publishPayload" class="form-control">
                            </div>
                            <button @click="publish" class="btn btn-primary">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="dist/bundleMqtt.js" type="text/javascript"></script>
    </body>
</html>
    
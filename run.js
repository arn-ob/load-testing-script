const { exec } = require('node:child_process')


for (let i = 0; i < 5; i++) {
    exec(`artillery run art/routine-test-${i}.yaml`, function (err, out, code) {
        if (err instanceof Error)
            throw err
        process.stderr.write(err)
        process.stdout.write(out)

        console.log(out);

        process.exit(code)
    })
}
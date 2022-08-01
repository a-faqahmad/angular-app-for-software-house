import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: Error) {
        alert('an unexpected error occurred: ' + error.message)
    }
}
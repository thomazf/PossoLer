package br.com.possoler.api.api_posso_ler.api.respondeai_api.controller;

import br.com.possoler.api.api_posso_ler.api.respondeai_api.dto.request.ExerciseRequestDTO;
import br.com.possoler.api.api_posso_ler.api.respondeai_api.interfaces.RespondeAiConnection;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class ListExerciseController {

    private final RespondeAiConnection respondeAiConnection;

    public ListExerciseController(@Qualifier("getListExercise") RespondeAiConnection respondeAiConnection) {
        this.respondeAiConnection = respondeAiConnection;
    }

    @PostMapping("${respondeai-api.endpoint.getListExerciseData}")
    private ResponseEntity<Object> getListExerciseData(
            @RequestHeader(name = "Authorization") String token,
            @RequestBody @Valid ExerciseRequestDTO payload
    ){
        Object response = respondeAiConnection.getData(payload.getItemId(), token);
        return ResponseEntity.ok().body(response);
    }
}

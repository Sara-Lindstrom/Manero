import { ChangeEvent, FormEvent } from 'react';
import { AxiosResponse } from 'axios';
import axios from 'axios';

type Navigate = (path: string) => void;
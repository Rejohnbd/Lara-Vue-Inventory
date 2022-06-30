<template>
    <div>
        <div class="row">
            <router-link to="" class="btn btn-primary">All Employee</router-link>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                                    </div>
                                    <form @submit.prevent="signup">
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Your Full Name" v-model="form.name" />
                                                    <small class="text-danger" v-if="errors.name">
                                                        {{ errors.name[0] }}
                                                    </small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="email" class="form-control"
                                                        placeholder="Enter Your Email" v-model="form.email" />
                                                    <small class="text-danger" v-if="errors.email">
                                                        {{ errors.email[0] }}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Your Address" v-model="form.address" />
                                                    <small class="text-danger" v-if="errors.address">
                                                        {{ errors.address[0] }}
                                                    </small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="number" class="form-control"
                                                        placeholder="Enter Your Sallery" v-model="form.sallery" />
                                                    <small class="text-danger" v-if="errors.sallery">
                                                        {{ errors.sallery[0] }}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="date" class="form-control"
                                                        placeholder="Enter Your Joining Date"
                                                        v-model="form.joining_date" />
                                                    <small class="text-danger" v-if="errors.joining_date">
                                                        {{ errors.joining_date[0] }}
                                                    </small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" placeholder="Enter Your NID"
                                                        v-model="form.nid" />
                                                    <small class="text-danger" v-if="errors.nid">
                                                        {{ errors.nid[0] }}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Your Phone Number" v-model="form.phone" />
                                                    <small class="text-danger" v-if="errors.phone">
                                                        {{ errors.phone[0] }}
                                                    </small>
                                                </div>
                                                <div class="col-md-6">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="file" class="custom-file-input" id="customFile">
                                                    <label class="custom-file-label" for="customFile">Choose
                                                        file</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="form.photo" style="height: 40px; width: 40px" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Add
                                                Employee</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/' });
        }
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        };
    },
    methods: {
        signup() {
            axios.post('/api/auth/signup', this.form)
                .then(res => {
                    // use for storage token
                    User.responseAfterLogin(res);
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    this.$router.push({ name: 'home' });
                })
                .catch(err => this.errors = err.response.data.errors)
        }
    }
}
</script>

<style>
</style>
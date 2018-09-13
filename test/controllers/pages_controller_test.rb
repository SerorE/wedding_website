require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get programme" do
    get pages_programme_url
    assert_response :success
  end

end
